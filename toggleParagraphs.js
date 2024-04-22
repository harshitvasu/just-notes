(function() {
    // Define the styles directly in JavaScript
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`p { border: 1px solid #ddd; padding: 10px; position: relative; overflow: hidden; cursor: pointer; }`, 0);
    style.sheet.insertRule(`.down-arrow { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); }`, 1);
    // style.sheet.insertRule(`.speak-btn { right: 40px; }`, 2);
    style.sheet.insertRule(`.hidden { height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`, 2);
    style.sheet.insertRule(`#percentage-display { position: fixed; right: 20px; top: 20px; background-color: #f9f9f9; padding: 5px 10px; border: 1px solid #ccc; border-radius: 5px; }`, 3);

    // Select all paragraph tags
    const paragraphs = document.querySelectorAll('p');
    let expandedCount = 0;
    const totalCount = paragraphs.length;
    const percentageDisplay = document.createElement('div');
    percentageDisplay.id = 'percentage-display';
    document.body.appendChild(percentageDisplay);

    paragraphs.forEach(paragraph => {
        const originalHTML = paragraph.innerHTML; // Store the original HTML
        const textContent = paragraph.textContent; // Use textContent for processing
        const firstNewLineIndex = textContent.indexOf('\n');
        let previewText;

        if (firstNewLineIndex !== -1) {
            previewText = textContent.substring(0, firstNewLineIndex) + ' ...';
        } else {
            const words = textContent.split(/\s+/);
            if (words.length > 25) {
                previewText = words.slice(0, 25).join(' ') + ' ...';
            } else {
                previewText = words.join(' ');
            }
        }

        const downArrow = document.createElement("span");
        downArrow.textContent = "↓";
        downArrow.className = "down-arrow";

        const speakButton = document.createElement("button");
        speakButton.textContent = "👂";
        speakButton.className = "speak-btn";
        speakButton.onclick = function() { speak(textContent); };

        // Set preview text and hide original content
        paragraph.innerHTML = `<span class="preview-text">${previewText}</span>`;
        paragraph.appendChild(downArrow);
        paragraph.appendChild(speakButton);
        paragraph.classList.add("hidden");

        paragraph.addEventListener('click', function(event) {
            if (event.target !== speakButton) {
                if (paragraph.classList.contains('hidden')) {
                    paragraph.innerHTML = originalHTML; // Restore the original HTML
                    paragraph.appendChild(speakButton); // Re-add the speak button
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

    updatePercentageDisplay(); // Initial display update
})();
function speak(text) {
    var msg = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    // alert(voices.map(function(voice) { return voice.name }).join(","));
    msg.voice = voices.filter(function(voice) { return voice.name == 'Samantha'; })[0];  // Replace 'Alice' with the name of the desired voice
    msg.rate = 0.75;
    window.speechSynthesis.speak(msg);
}
