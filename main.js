class Player {
    constructor(onSpeechEndCallback) {
        this.selectedVoice = localStorage.getItem('last-used-voice') || "Samantha";
        this.selectedRate = localStorage.getItem('last-used-rate') || 1.0;
        this.selectedGap = localStorage.getItem('last-used-gap') || 750;
        this.onSpeechEndCallback = onSpeechEndCallback;
        this.synth = window.speechSynthesis;
        this.voice = null;
        this.parts = [];
        this.currentIndex = 0;
        this.setVoice(this.selectedVoice);
    }

    getVoices() {
        return this.synth.getVoices();
    }

    setVoice(voiceName) {
        const voices = this.getVoices();
        if (voices.length === 0) {
            setTimeout(() => this.setVoice(voiceName), 100);
            return;
        }

        this.voice = voices.find(v => v.name === voiceName) || voices.find(v => v.name === "Samantha") || voices[0];
        this.saveSettings();
    }

    saveSettings() {
        localStorage.setItem('last-used-voice', this.voice.name);
        localStorage.setItem('last-used-rate', this.selectedRate);
        localStorage.setItem('last-used-gap', this.selectedGap);
    }

    speak(text) {
        this.parts = this.splitTextIntoParts(text);
        this.currentIndex = 0;
        this.speakPart(0);
    }

    speakPart(index) {
        if (index >= this.parts.length) {
            this.onSpeechEndCallback();
            return;
        }

        const part = this.parts[index];
        const msg = new SpeechSynthesisUtterance(part);
        msg.voice = this.voice;
        msg.rate = this.selectedRate;

        msg.onend = () => {
            this.currentIndex = index + 1;
            if (this.currentIndex < this.parts.length) {
                setTimeout(() => this.speakPart(this.currentIndex), this.selectedGap);
            } else {
                this.onSpeechEndCallback();
            }
        };

        this.synth.speak(msg);
    }

    splitTextIntoParts(text) {
        const parts = text.split(/(\n|(?<![A-Z])[.])|:/);
        for (let i = parts.length - 2; i >= 0; i--) {
            if (parts[i + 1] === '.') {
                parts[i] += parts[i + 1];
                parts.splice(i + 1, 1);
            }
        }
        return parts;
    }

    pause() {
        if (this.synth.speaking) {
            this.synth.pause();
        }
    }

    resume() {
        if (this.synth.paused) {
            this.synth.resume();
        }
    }

    stop() {
        if (this.synth.speaking || this.synth.paused) {
            this.synth.cancel();
        }
    }

    rewind() {
        if (this.currentIndex === 0) {
            this.synth.cancel();
            setTimeout(() => {
                this.speakPart(0);
            }, 100); // Adjust the delay as necessary
        } else {
            this.synth.cancel();
            setTimeout(() => {
                this.currentIndex = Math.max(0, this.currentIndex - 1);
                this.speakPart(this.currentIndex);
            }, 100); // Adjust the delay as necessary
        }
    }

    speakOnce(text, callback) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.voice = this.voice;
        msg.rate = this.selectedRate;

        msg.onend = () => {
            this.stop();
            if (callback) callback();
        };

        this.synth.speak(msg);
    }
}

(function() {
    let expandedCount = 0;
    let playQueue = [];
    let isPlayingAll = false;
    let currentSentences = [];
    let currentSentenceIndex = 0;

    const progressBarContainer = document.createElement('div');
    progressBarContainer.id = 'progress-bar-container';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBarContainer.appendChild(progressBar);
    document.body.appendChild(progressBarContainer);

    const player = new Player(onSentenceEnd);
    createControlPanel();
    createSettingsPopup();
    initializeReadBoxes();
    loadCompletedBoxes();

    function createControlPanel() {
        const controlPanel = document.createElement('div');
        controlPanel.id = 'control-panel';
    
        const stopButton = createButton('⏹️', '', () => {
            player.stop();
            playPauseButton.innerHTML = "▶️";
            setControlOpacity(0.2,1.0,0.2);
            removePlayingClass();
            isPlayingAll = false;
            playQueue = [];
        });
        stopButton.id = 'stop-button';
    
        const playPauseButton = createButton('▶️', '', () => {
            if (window.speechSynthesis.paused) {
                player.resume();
                playPauseButton.innerHTML = "⏸️";
            } else if (window.speechSynthesis.speaking) {
                player.pause();
                playPauseButton.innerHTML = "▶️";
            } else {
                playNonCompletedTracks();
                playPauseButton.innerHTML = "⏸️";
            }
            setControlOpacity(1.0,1.0,1.0);
        });
        playPauseButton.id = 'play-pause-button';

        const rewindButton = createButton('⏪', '', () => {
            player.rewind();
            playPauseButton.innerHTML = "⏸️";
        });
        rewindButton.id = 'rewind-button';

    
        const settingsButton = createButton('⚙️', 'settings-button', () => toggleSettingsPopup());
        settingsButton.id = 'settings-button';
    
        controlPanel.appendChild(stopButton);
        controlPanel.appendChild(playPauseButton);
        controlPanel.appendChild(rewindButton);
        controlPanel.appendChild(settingsButton);
    
        document.body.appendChild(controlPanel);
        setControlOpacity(0.2,1.0,0.2);
    }
    
    function setControlOpacity(stopOpacity, playPauseOpacity, rewindOpacity) {
        document.getElementById('stop-button').style.opacity = stopOpacity;
        document.getElementById('play-pause-button').style.opacity = playPauseOpacity;
        document.getElementById('rewind-button').style.opacity = rewindOpacity;
    }
    
    function removePlayingClass() {
        const currentPlayingParagraph = document.querySelector('.read-content.playing');
        if (currentPlayingParagraph) {
            currentPlayingParagraph.classList.remove('playing');
            currentPlayingParagraph.classList.add('completed');
            saveCompletedBoxes();
            updateProgressBar();
        }
    }

    function createSettingsPopup() {
        const settingsPopup = document.createElement('div');
        settingsPopup.id = 'settings-popup';

        const voiceLabel = createLabel('Voice:', settingsPopup);
        const voiceSelect = document.createElement('select');
        settingsPopup.appendChild(voiceSelect);

        const rateLabel = createLabel('Rate:', settingsPopup);
        const rateInput = createNumberInput('0.5', '2', '0.1', player.selectedRate);
        settingsPopup.appendChild(rateInput);

        const gapLabel = createLabel('Gap Time:', settingsPopup);
        const gapTime = createNumberInput('500', '2000', '100', player.selectedGap);
        settingsPopup.appendChild(gapTime);

        const saveButton = createButton('Save', '', () => {
            player.setVoice(voiceSelect.value);
            player.selectedRate = parseFloat(rateInput.value);
            player.selectedGap = parseFloat(gapTime.value);
            player.saveSettings();
            toggleSettingsPopup();
        });
        settingsPopup.appendChild(saveButton);

        document.body.appendChild(settingsPopup);

        populateVoiceList(voiceSelect);
    }

    function populateVoiceList(voiceSelect) {
        const voices = player.getVoices();
        if (voices.length === 0) {
            setTimeout(() => populateVoiceList(voiceSelect), 100);
            return;
        }

        voiceSelect.innerHTML = '';
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.appendChild(option);
        });

        const lastUsedVoice = localStorage.getItem('last-used-voice');
        voiceSelect.value = lastUsedVoice || (voices.find(v => v.name === "Samantha") ? "Samantha" : voices[0].name);
    }

    function toggleSettingsPopup() {
        document.body.classList.toggle('show-settings-popup');
    }

    function createLabel(text, parent) {
        const label = document.createElement('label');
        label.textContent = text;
        parent.appendChild(label);
        return label;
    }

    function createNumberInput(min, max, step, value) {
        const input = document.createElement('input');
        input.type = 'number';
        input.min = min;
        input.max = max;
        input.step = step;
        input.value = value;
        return input;
    }

    function createButton(text, className, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        if (className) button.className = className;
        button.onclick = onClick;
        return button;
    }

    function initializeReadBoxes() {
        const container = document.querySelector('.markdown-preview, .markdown');
        const children = Array.from(container.children);
        const completedBoxes = JSON.parse(localStorage.getItem('completedBoxes')) || [];

        let readBoxes = [];
        let currentBox = document.createElement('div');
        currentBox.className = 'read-content hidden';

        children.forEach(child => {
            if (['H1', 'H2', 'H3', 'H4', 'HR'].includes(child.tagName)) {
                if (currentBox.children.length > 0) {
                    readBoxes.push(currentBox);
                    container.insertBefore(currentBox, child);
                    currentBox = document.createElement('div');
                    currentBox.className = 'read-content hidden';
                }
                readBoxes.push(child); // Add the heading or <hr> as a direct child
            } else {
                currentBox.appendChild(child);
            }
        });

        if (currentBox.children.length > 0) {
            readBoxes.push(currentBox);
            container.appendChild(currentBox);
        }

        readBoxes.forEach(element => {
            if (['H1', 'H2', 'H3', 'H4', 'HR'].includes(element.tagName)) return; // Skip headings and <hr> elements

            const originalHTML = element.innerHTML;
            const innerText = element.innerText.trim();
            const previewText = innerText.split(/\s+/).slice(0, 25).join(' ') + ' ...';

            if (completedBoxes.includes(innerText)) {
                element.classList.add('completed');
            } else {
                element.innerHTML = `<span class="preview-text">${previewText}</span>`;
                element.classList.add('hidden');
            }

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            const speakButton = createButton('👂', 'speak-btn', () => {
                if (!window.speechSynthesis.speaking) {
                    currentSentences = innerText.split('. ');
                    currentSentenceIndex = 0;
                    speakNextSentence();
                    setControlOpacity(1.0,1.0,1.0);
                    element.classList.add('playing');
                    document.getElementById('play-pause-button').innerHTML = "⏸️";
                }
            });
            const copyButton = createButton('📋', 'copy-btn', () => copyText(innerText));
            buttonContainer.appendChild(speakButton);
            buttonContainer.appendChild(copyButton);

            element.appendChild(buttonContainer);

            element.addEventListener('click', function(event) {
                if (![speakButton, copyButton].includes(event.target)) {
                    toggleContainer(element, originalHTML, previewText, buttonContainer);
                }
            });
        });

        // Calculate initial expanded count
        expandedCount = document.querySelectorAll('.read-content.completed').length;
        updateProgressBar();
    }

    function toggleContainer(container, originalHTML, previewText, buttonContainer) {
        if (container.classList.contains('hidden')) {
            container.innerHTML = originalHTML;
            container.appendChild(buttonContainer);
            container.classList.remove('hidden');
            expandedCount++;
        } else {
            container.innerHTML = `<span class="preview-text">${previewText}</span>`;
            container.appendChild(buttonContainer);
            container.classList.add('hidden');
            expandedCount = Math.max(0, expandedCount - 1);
    
            // Find the nearest preceding H1, H2, H3, or H4 element
            let heading = container.previousElementSibling;
            while (heading && !/H[1-4]/.test(heading.tagName)) {
                heading = heading.previousElementSibling;
            }
    
            if (heading) {
                // Use IntersectionObserver to check if the heading is in the viewport
                const observer = new IntersectionObserver((entries) => {
                    const entry = entries[0];
                    if (!entry.isIntersecting) {
                        // Smoothly scroll the page to place the heading at the top if not in the viewport
                        heading.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    observer.disconnect();
                }, { threshold: [0] });
    
                observer.observe(heading);
            }
        }
        updateProgressBar();
        saveCompletedBoxes();
    }
    
    
    
    function updateProgressBar() {
        const completedCount = document.querySelectorAll('.read-content.completed').length;
        const totalCount = document.querySelectorAll('.read-content').length;
        const percentage = (completedCount / totalCount * 100).toFixed(0);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }

    function copyText(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied successfully!');
        }).catch(err => {
            alert('Failed to copy text: ', err);
        });
    }

    function saveCompletedBoxes() {
        const completedBoxes = [];
        document.querySelectorAll('.read-content.completed').forEach(box => {
            completedBoxes.push(box.innerText.trim());
        });
        localStorage.setItem('completedBoxes', JSON.stringify(completedBoxes));
    }

    function loadCompletedBoxes() {
        const completedBoxes = JSON.parse(localStorage.getItem('completedBoxes')) || [];
        document.querySelectorAll('.read-content').forEach(box => {
            if (completedBoxes.includes(box.innerText.trim())) {
                box.classList.add('completed');
            }
        });
        updateProgressBar();
    }

    function onSentenceEnd() {
        if (currentSentenceIndex < currentSentences.length - 1) {
            currentSentenceIndex++;
            speakNextSentence();
        } else {
            onSectionEnd();
        }
    }

    function onSectionEnd() {
        removePlayingClass();

        if (isPlayingAll) {
            if (playQueue.length > 0) {
                pauseAndMoveToNextSection(() => {
                    const nextBox = playQueue.shift();
                    nextBox.querySelector('.speak-btn').click();
                });
            } else {
                isPlayingAll = false;
                document.getElementById('play-pause-button').innerHTML = "▶️";
            }
        }
    }

    function pauseAndMoveToNextSection(callback) {
        pause(5000, () => {
            player.speakOnce("Moving on to next Section", () => {
                pause(3000, callback);
            });
        });
    }

    function pause(duration, callback) {
        setTimeout(callback, duration);
    }

    function speakNextSentence() {
        if (currentSentenceIndex < currentSentences.length) {
            player.speak(currentSentences[currentSentenceIndex], onSentenceEnd);
        }
    }

    function playNonCompletedTracks() {
        const nonCompletedBoxes = Array.from(document.querySelectorAll('.read-content:not(.completed)'));
        if (nonCompletedBoxes.length > 0) {
            isPlayingAll = true;
            playQueue = nonCompletedBoxes;
            playQueue.shift().querySelector('.speak-btn').click();
        }
    }

})();
