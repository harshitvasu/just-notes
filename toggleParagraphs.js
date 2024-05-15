(function() {
    const style = document.createElement('style');
    document.head.appendChild(style);

    const readBoxes = document.querySelectorAll('.markdown-preview > :not(h1, h2, h3, h4), .markdown > :not(h1, h2, h3, h4)');
    let expandedCount = 0;
    const totalCount = readBoxes.length;

    const percentageDisplay = document.createElement('div');
    percentageDisplay.id = 'percentage-display';
    document.body.appendChild(percentageDisplay);

    const controlPanel = createControlPanel();
    document.body.appendChild(controlPanel);

    const settingsPopup = createSettingsPopup();
    document.body.appendChild(settingsPopup);

    let selectedVoice = "Samantha";
    let selectedRate = 0.75;
    let selectedGap = 750;

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

            const speakButton = createButton('👂', 'speak-btn', () => speak(textContent));
            const copyButton = createButton('📋', 'copy-btn', () => copyText(textContent));
            paragraph.appendChild(speakButton);
            paragraph.appendChild(copyButton);

            paragraph.addEventListener('click', function(event) {
                if (![speakButton, copyButton].includes(event.target)) {
                    toggleParagraph(paragraph, originalHTML, previewText, speakButton, copyButton);
                }
            });
        });
        updatePercentageDisplay();
    }

    function toggleParagraph(paragraph, originalHTML, previewText, speakButton, copyButton) {
        if (paragraph.classList.contains('hidden')) {
            paragraph.innerHTML = originalHTML;
            paragraph.appendChild(speakButton);
            paragraph.appendChild(copyButton);
            paragraph.classList.remove('hidden');
            expandedCount++;
        } else {
            paragraph.innerHTML = `<span class="collapsible-icon">></span><span class="preview-text">${previewText}</span>`;
            paragraph.appendChild(speakButton);
            paragraph.appendChild(copyButton);
            paragraph.classList.add('hidden');
            expandedCount = Math.max(0, expandedCount - 1);
        }
        updatePercentageDisplay();
    }

    function updatePercentageDisplay() {
        const percentage = (expandedCount / totalCount * 100).toFixed(0);
        percentageDisplay.textContent = `${percentage}% Expanded`;
    }

    function createControlPanel() {
        const controlPanel = document.createElement('div');
        controlPanel.id = 'control-panel';

        const stopButton = createButton('⏹️', '', () => window.speechSynthesis.cancel());
        const playPauseButton = createButton('▶️', '', toggleSpeech);
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
        const rateInput = createNumberInput('0.5', '2', '0.1', '0.75');
        settingsPopup.appendChild(rateInput);

        const gapLabel = createLabel('Gap Time:', settingsPopup);
        const gapTime = createNumberInput('500', '2000', '100', '750');
        settingsPopup.appendChild(gapTime);

        const saveButton = createButton('Save', '', saveSettings);
        settingsPopup.appendChild(saveButton);

        function saveSettings() {
            selectedVoice = voiceSelect.value;
            selectedRate = parseFloat(rateInput.value);
            selectedGap = parseFloat(gapTime.value);
            settingsPopup.style.display = 'none';
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
        settingsPopup.style.display = settingsPopup.style.display === 'none' ? 'block' : 'none';
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

        const defaultVoice = voices.find(v => v.name === "Samantha") || voices[0];
        if (defaultVoice) {
            voiceSelect.value = defaultVoice.name;
            selectedVoice = defaultVoice.name;
        }
    }

    function speak(text) {
        
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
                }
            };

            synth.speak(msg);
            
            
        }
        const playPauseButton = document.querySelector('#control-panel button:nth-child(2)');
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
        const playPauseButton = document.querySelector('#control-panel button:nth-child(2)');
        if (synth.paused) {
            synth.resume();
            playPauseButton.innerHTML = "⏸️";
        } else if (synth.speaking) {
            synth.pause();
            playPauseButton.innerHTML = "▶️";
        }
    }
})();
