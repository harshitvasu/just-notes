(function() {
    // Define the styles directly in JavaScript
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`p, ol, ul { border: 1px solid #ddd; padding: 10px; position: relative; overflow: hidden; cursor: pointer; }`, 0);
    style.sheet.insertRule(`.down-arrow { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); }`, 1);
    style.sheet.insertRule(`.hidden { height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`, 2);
    style.sheet.insertRule(`#percentage-display, #control-panel { position: fixed; right: 20px; top: 20px; background-color: #f9f9f9; padding: 5px 10px; border: 1px solid #ccc; border-radius: 5px; }`, 3);
    style.sheet.insertRule(`#control-panel { bottom: 20px; right: 50%; transform: translateX(50%); top: auto; }`, 4);
    style.sheet.insertRule(`#settings-button { position: fixed; bottom: 20px; right: 20px; background:none;color: white; border: none; border-radius: 50%; width: 50px; height: 50px; cursor: pointer; font-size: 24px; z-index: 1000; }`, 5);
    style.sheet.insertRule(`#settings-popup { display: none; position: fixed; bottom: 80px; right: 20px; background-color: white; border: 1px solid #ccc; border-radius: 5px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); max-width: 300px; width: 100%; z-index: 999; }`, 6);
    style.sheet.insertRule(`#settings-popup label { display: block; margin-bottom: 10px; }`, 7);
    style.sheet.insertRule(`#settings-popup select, #settings-popup input { margin-bottom: 10px; width: 100%; padding: 5px; box-sizing: border-box; }`, 8);

    // Select both paragraph and specified ordered list tags
    const readBoxes = document.querySelectorAll('.markdown-preview > :not(h1, h2, h3, h4), .markdown > :not(h1, h2, h3, h4)');
    let expandedCount = 0;
    const totalCount = readBoxes.length;
    const percentageDisplay = document.createElement('div');
    percentageDisplay.id = 'percentage-display';
    document.body.appendChild(percentageDisplay);

    readBoxes.forEach(paragraph => {
        const originalHTML = paragraph.innerHTML; // Store the original HTML
        const textContent = paragraph.textContent.trim(); // Use textContent for processing
        let previewText = textContent.split(/\s+/).slice(0, 25).join(' ') + ' ...';

        const downArrow = document.createElement("span");
        downArrow.textContent = "↓";
        downArrow.className = "down-arrow";

        const speakButton = document.createElement("button");
        speakButton.textContent = "👂";
        speakButton.className = "speak-btn";
        speakButton.onclick = function() { speak(textContent); };

        const copyButton = document.createElement("button");
        copyButton.textContent = "📋";
        copyButton.className = "copy-btn";
        copyButton.onclick = function() { copyText(textContent); };

        // Set preview text and hide original content
        paragraph.innerHTML = `<span class="preview-text">${previewText}</span>`;
        paragraph.appendChild(downArrow);
        paragraph.appendChild(speakButton);
        paragraph.appendChild(copyButton);
        paragraph.classList.add("hidden");

        paragraph.addEventListener('click', function(event) {
            if (event.target !== speakButton && event.target !== copyButton) {
                if (paragraph.classList.contains('hidden')) {
                    paragraph.innerHTML = originalHTML; // Restore the original HTML
                    paragraph.appendChild(speakButton); // Re-add the speak button
                    paragraph.appendChild(copyButton); // Re-add the copy button
                    paragraph.classList.remove('hidden');
                    expandedCount++;
                } else {
                    paragraph.innerHTML = `<span class="preview-text">${previewText}</span>`;
                    paragraph.appendChild(downArrow);
                    paragraph.appendChild(speakButton);
                    paragraph.appendChild(copyButton);
                    paragraph.classList.add('hidden');
                    expandedCount--;
                }
                updatePercentageDisplay();
            }
        });
    });

    function updatePercentageDisplay() {
        const percentage = (expandedCount / totalCount * 100).toFixed(0);
        percentageDisplay.textContent = `${percentage}% Expanded`;
    }

    updatePercentageDisplay(); // Initial display update

    const controlPanel = document.createElement("div");
    controlPanel.id = "control-panel";
    document.body.appendChild(controlPanel);

    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop Speaking";
    stopButton.onclick = () => window.speechSynthesis.cancel();
    controlPanel.appendChild(stopButton);

    const settingsButton = document.createElement("button");
    settingsButton.id = "settings-button";
    settingsButton.textContent = "⚙️";
    document.body.appendChild(settingsButton);

    const settingsPopup = document.createElement("div");
    settingsPopup.id = "settings-popup";
    document.body.appendChild(settingsPopup);

    const voiceLabel = document.createElement("label");
    voiceLabel.textContent = "Voice:";
    settingsPopup.appendChild(voiceLabel);

    const voiceSelect = document.createElement("select");
    settingsPopup.appendChild(voiceSelect);

    const rateLabel = document.createElement("label");
    rateLabel.textContent = "Rate:";
    settingsPopup.appendChild(rateLabel);

    const rateInput = document.createElement("input");
    rateInput.type = "number";
    rateInput.min = "0.5";
    rateInput.max = "2";
    rateInput.step = "0.1";
    rateInput.value = "0.75";
    settingsPopup.appendChild(rateInput);

    const gapLabel = document.createElement("label");
    gapLabel.textContent = "Gap Time:";
    settingsPopup.appendChild(gapLabel);

    const gapTime = document.createElement("input");
    gapTime.type = "number";
    gapTime.min = "500";
    gapTime.max = "2000";
    gapTime.step = "100";
    gapTime.value = "750";
    settingsPopup.appendChild(gapTime);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = function() {
        selectedVoice = voiceSelect.value;
        selectedRate = parseFloat(rateInput.value);
        selectedGap = parseFloat(gapTime.value);
        settingsPopup.style.display = "none";
    };
    settingsPopup.appendChild(saveButton);

    const pauseButton = document.createElement("button");
    pauseButton.textContent = "Pause/Resume";
    pauseButton.onclick = toggleSpeech;
    controlPanel.appendChild(pauseButton);

    settingsButton.addEventListener("click", function() {
        settingsPopup.style.display = settingsPopup.style.display === "none" ? "block" : "none";
    });

    let selectedVoice = "Samantha";
    let selectedRate = 0.75;
    let selectedGap = 750;

    function populateVoiceList() {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        voiceSelect.innerHTML = '';
        voices.forEach((voice) => {
            const option = document.createElement("option");
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.appendChild(option);
        });

        // Set default voice
        const defaultVoice = voices.find(v => v.name === "Samantha") || voices[0];
        if (defaultVoice) {
            voiceSelect.value = defaultVoice.name;
            selectedVoice = defaultVoice.name;
        }
    }

    populateVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speak(text) {
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        var voice = voices.find(v => v.name === selectedVoice);

        // Splitting text into parts for pausing, the regex will capture newlines and periods not preceded by capital letters
        var parts = text.split(/(\n|(?<![A-Z])[.])/);

        // Concatenate each period not preceded by a capital letter back to the previous text part
        for (var i = parts.length - 2; i >= 0; i--) {
            if (parts[i + 1] === '.') {
                parts[i] += parts[i + 1];
                parts.splice(i + 1, 1);  // Remove the period from the array after appending it to the previous string
            }
        }

        function speakPart(index) {
            if (index >= parts.length) return; // Stop if there are no more parts to speak

            var part = parts[index];
            var msg = new SpeechSynthesisUtterance(part);
            msg.voice = voice;
            msg.rate = selectedRate;

            msg.onend = function() {
                if (index < parts.length - 1) {
                    setTimeout(function() { speakPart(index + 1); }, selectedGap); // Wait for 1 second before speaking the next part
                }
            };

            synth.speak(msg);
        }

        speakPart(0);
    }

    function copyText(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('Text copied successfully!');
        }, function(err) {
            alert('Failed to copy text: ', err);
        });
    }

    function toggleSpeech() {
        const synth = window.speechSynthesis;
        if (synth.paused) {
            synth.resume();
        } else if (synth.speaking) {
            synth.pause();
        }
    }
})();
