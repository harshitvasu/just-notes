(function() {
    // Define the styles directly in JavaScript
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`p, ol, ul { border: 1px solid #ddd; padding: 10px; position: relative; overflow: hidden; cursor: pointer; }`, 0);
    style.sheet.insertRule(`.down-arrow { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); }`, 1);
    style.sheet.insertRule(`.hidden { height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`, 2);
    style.sheet.insertRule(`#percentage-display, #control-panel { position: fixed; right: 20px; top: 20px; background-color: #f9f9f9; padding: 5px 10px; border: 1px solid #ccc; border-radius: 5px; }`, 3);
    style.sheet.insertRule(`#control-panel { bottom: 20px; right: 50%; transform: translateX(50%); top: auto; }`, 4);

    // Select both paragraph and specified ordered list tags
    const readBoxes = document.querySelectorAll('.markdown-preview > :not(h1, h2, h3, h4)');
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

    const pauseButton = document.createElement("button");
    pauseButton.textContent = "Pause/Resume";
    pauseButton.onclick = toggleSpeech;
    controlPanel.appendChild(pauseButton);

    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop Speaking";
    stopButton.onclick = () => window.speechSynthesis.cancel();
    controlPanel.appendChild(stopButton);
})();
function speak(text) {
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    var selectedVoice = voices.filter(function(voice) { return voice.name === 'Alex'; })[0];

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
        msg.voice = selectedVoice;
        msg.rate = 0.75;

        msg.onend = function() {
            if (index < parts.length - 1) {
                setTimeout(function() { speakPart(index + 1); }, 1000); // Wait for 5 seconds before speaking the next part
            }
        };

        synth.speak(msg);
    }

    speakPart(0); // Start speaking the first part
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
