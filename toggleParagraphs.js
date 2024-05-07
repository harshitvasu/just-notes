(function() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`p { border: 1px solid #ddd; padding: 10px; position: relative; overflow: hidden; cursor: pointer; }`, 0);
    style.sheet.insertRule(`.down-arrow { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); }`, 1);
    style.sheet.insertRule(`.hidden { height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`, 2);
    style.sheet.insertRule(`#percentage-display, #control-panel { position: fixed; right: 20px; top: 20px; background-color: #f9f9f9; padding: 5px 10px; border: 1px solid #ccc; border-radius: 5px; }`, 3);
    style.sheet.insertRule(`#control-panel { bottom: 20px; right: 50%; transform: translateX(50%); top: auto; }`, 4);

    const paragraphs = document.querySelectorAll('p');
    let expandedCount = 0;
    const totalCount = paragraphs.length;
    const percentageDisplay = document.createElement('div');
    percentageDisplay.id = 'percentage-display';
    document.body.appendChild(percentageDisplay);

    paragraphs.forEach(paragraph => {
        const originalHTML = paragraph.innerHTML;
        const textContent = paragraph.textContent;
        const firstNewLineIndex = textContent.indexOf('\n');
        let previewText = firstNewLineIndex !== -1 ? textContent.substring(0, firstNewLineIndex) + ' ...' : textContent.split(/\s+/).slice(0, 25).join(' ') + ' ...';

        const downArrow = document.createElement("span");
        downArrow.textContent = "↓";
        downArrow.className = "down-arrow";

        const speakButton = document.createElement("button");
        speakButton.textContent = "👂";
        speakButton.className = "speak-btn";
        speakButton.onclick = () => speak(textContent);

        paragraph.innerHTML = `<span class="preview-text">${previewText}</span>`;
        paragraph.appendChild(downArrow);
        paragraph.appendChild(speakButton);
        paragraph.classList.add("hidden");

        paragraph.addEventListener('click', function(event) {
            if (event.target !== speakButton) {
                if (paragraph.classList.contains('hidden')) {
                    paragraph.innerHTML = originalHTML;
                    paragraph.appendChild(speakButton);
                    paragraph.classList.remove('hidden');
                    expandedCount++;
                } else {
                    paragraph.innerHTML = `<span class="preview-text">${previewText}</span>`;
                    paragraph.appendChild(downArrow);
                    paragraph.appendChild(speakButton);
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

    updatePercentageDisplay();

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
    var msg = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices.find(voice => voice.name === 'Samantha');
    msg.rate = 0.75;
    window.speechSynthesis.speak(msg);
}

function toggleSpeech() {
    const synth = window.speechSynthesis;
    if (synth.paused) {
        synth.resume();
    } else if (synth.speaking) {
        synth.pause();
    }
}
