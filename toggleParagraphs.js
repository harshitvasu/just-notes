(function() {
    const style = document.createElement('style');
    document.head.appendChild(style);

    const readBoxes = document.querySelectorAll('.markdown-preview > :not(h1, h2, h3, h4), .markdown > :not(h1, h2, h3, h4)');
    let expandedCount = 0;
    const totalCount = readBoxes.length;

    const progressBarContainer = document.createElement('div');
    progressBarContainer.id = 'progress-bar-container';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBarContainer.appendChild(progressBar);
    document.body.appendChild(progressBarContainer);

    const controlPanel = createControlPanel();
    document.body.appendChild(controlPanel);

    let selectedVoice = localStorage.getItem('last-used-voice') || "Samantha";
    let selectedRate = localStorage.getItem('last-used-rate')  || 0.75;
    let selectedGap = localStorage.getItem('last-used-gap')  || 750;
    let currentPlayingParagraph = null;

    const settingsPopup = createSettingsPopup();
    document.body.appendChild(settingsPopup);

    initializeReadBoxes();
    populateVoiceList();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function initializeReadBoxes() {
        readBoxes.forEach(paragraph => {
            const originalHTML = paragraph.innerHTML;
            const textContent = paragraph.textContent.trim();
            const previewText = textContent.split(/\s+/).slice(0, 25).join(' ') + ' ...';

            paragraph.innerHTML = `<span class="collapsible-icon">></span><span class="preview-text">${previewText}</span>`;
            paragraph.classList.add('hidden');
            paragraph.classList.add('read-content');

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            const speakButton = createButton('👂', 'speak-btn', () => speak(textContent, paragraph));
            const copyButton = createButton('📋', 'copy-btn', () => copyText(textContent));
            buttonContainer.appendChild(speakButton);
            buttonContainer.appendChild(copyButton);

            paragraph.appendChild(buttonContainer);

            paragraph.addEventListener('click', function(event) {
                if (![speakButton, copyButton].includes(event.target)) {
                    toggleParagraph(paragraph, originalHTML, previewText, buttonContainer);
                }
            });
        });
        updateProgressBar();
    }

    function toggleParagraph(paragraph, originalHTML, previewText, buttonContainer) {
        if (paragraph.classList.contains('hidden')) {
            paragraph.innerHTML = originalHTML;
            paragraph.appendChild(buttonContainer);
            paragraph.classList.remove('hidden');
            expandedCount++;
        } else {
            paragraph.innerHTML = `<span class="collapsible-icon">></span><span class="preview-text">${previewText}</span>`;
            paragraph.appendChild(buttonContainer);
            paragraph.classList.add('hidden');
            expandedCount = Math.max(0, expandedCount - 1);
        }
        updateProgressBar();
    }

    function togglePlaying(paragraph, isPlaying) {
        if (currentPlayingParagraph) {
            currentPlayingParagraph.classList.remove('playing');
            if (!isPlaying) {
                currentPlayingParagraph.classList.add('completed');
            }
        }
        if (isPlaying && paragraph) {
            paragraph.classList.add('playing');
            currentPlayingParagraph = paragraph;
        } else {
            currentPlayingParagraph = null;
        }
    }

    function updateProgressBar() {
        const percentage = (expandedCount / totalCount * 100).toFixed(0);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }

    function createControlPanel() {
        const controlPanel = document.createElement('div');
        controlPanel.id = 'control-panel';

        const stopButton = createButton('⏹️', '', () => {
            window.speechSynthesis.cancel();
            playPauseButton.innerHTML = "▶️";
            stopButton.style.opacity = 0.2;
            playPauseButton.style.opacity = 0.2;
            togglePlaying(null, false);
        });
        stopButton.id = 'stop-button';
        stopButton.style.opacity = 0.2;

        const playPauseButton = createButton('▶️', '', toggleSpeech);
        playPauseButton.id = 'play-pause-button';
        playPauseButton.style.opacity = 0.2;

        const settingsButton = createButton('⚙️', 'settings-button', toggleSettingsPopup);

        controlPanel.appendChild(stopButton);
        controlPanel.appendChild(playPauseButton);
        controlPanel.appendChild(settingsButton);

        return controlPanel;
    }

    function createSettingsPopup() {
        const settingsPopup = document.createElement('div');
        settingsPopup.id = 'settings-popup';

        const voiceLabel = createLabel('Voice:', settingsPopup);
        const voiceSelect = document.createElement('select');
        settingsPopup.appendChild(voiceSelect);

        const rateLabel = createLabel('Rate:', settingsPopup);
        const rateInput = createNumberInput('0.5', '2', '0.1', selectedRate);
        settingsPopup.appendChild(rateInput);

        const gapLabel = createLabel('Gap Time:', settingsPopup);
        const gapTime = createNumberInput('500', '2000', '100', selectedGap);
        settingsPopup.appendChild(gapTime);

        const saveButton = createButton('Save', '', saveSettings);
        settingsPopup.appendChild(saveButton);

        function saveSettings() {
            selectedVoice = voiceSelect.value;
            selectedRate = parseFloat(rateInput.value);
            selectedGap = parseFloat(gapTime.value);
            document.body.classList.remove('show-settings-popup');
            localStorage.setItem('last-used-voice', selectedVoice);
            localStorage.setItem('last-used-rate', selectedRate);
            localStorage.setItem('last-used-gap', selectedGap);
        }

        return settingsPopup;
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

    function toggleSettingsPopup() {
        const settingsPopup = document.getElementById('settings-popup');
        if (!document.body.classList.contains('show-settings-popup')) {
            document.body.classList.add('show-settings-popup');
        } else {
            document.body.classList.remove('show-settings-popup');
        }
    }

    function populateVoiceList() {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const voiceSelect = document.querySelector('#settings-popup select');
        voiceSelect.innerHTML = '';

        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.appendChild(option);
        });

        const lastUsedVoice = localStorage.getItem('last-used-voice');
        const defaultVoice = voices.find(v => v.name === lastUsedVoice) || voices.find(v => v.name === "Samantha") || voices[0];
        
        if (defaultVoice) {
            voiceSelect.value = defaultVoice.name;
            selectedVoice = defaultVoice.name;
        }
    }

    function speak(text, paragraph) {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const voice = voices.find(v => v.name === selectedVoice);
        const parts = splitTextIntoParts(text);
    
        function speakPart(index) {
            if (index >= parts.length) return;
    
            const part = parts[index];
            const msg = new SpeechSynthesisUtterance(part);
            msg.voice = voice;
            msg.rate = selectedRate;
    
            msg.onend = () => {
                if (index < parts.length - 1) {
                    setTimeout(() => speakPart(index + 1), selectedGap);
                } else {
                    togglePlaying(paragraph, false);
                    playPauseButton.innerHTML = "▶️";
                    playPauseButton.style.opacity = 0.2;
                    stopButton.style.opacity = 0.2;
                }
            };
            playPauseButton.style.opacity = 1.0;
            stopButton.style.opacity = 1.0;
            togglePlaying(paragraph, true);
            synth.speak(msg);
        }
    
        const playPauseButton = document.querySelector('#play-pause-button');
        const stopButton = document.querySelector('#stop-button');
        playPauseButton.innerHTML = "⏸️";
        speakPart(0);
    }

    function splitTextIntoParts(text) {
        const parts = text.split(/(\n|(?<![A-Z])[.])/);
        for (let i = parts.length - 2; i >= 0; i--) {
            if (parts[i + 1] === '.') {
                parts[i] += parts[i + 1];
                parts.splice(i + 1, 1);
            }
        }
        return parts;
    }

    function copyText(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied successfully!');
        }).catch(err => {
            alert('Failed to copy text: ', err);
        });
    }

    function toggleSpeech() {
        const synth = window.speechSynthesis;
        const playPauseButton = document.querySelector('#play-pause-button');
        if (synth.paused) {
            synth.resume();
            playPauseButton.innerHTML = "⏸️";
        } else if (synth.speaking) {
            synth.pause();
            playPauseButton.innerHTML = "▶️";
        }
    }
})();
