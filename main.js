// main.js
import { Player } from './player.js';

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

    const player = new Player();

    initializeReadBoxes();

    function initializeReadBoxes() {
        const container = document.querySelector('.markdown-preview, .markdown');
        const children = Array.from(container.children);
    
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
    
            element.innerHTML = `<span class="collapsible-icon">></span><span class="preview-text">${previewText}</span>`;
            element.classList.add('hidden');
    
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
    
            const speakButton = createButton('👂', 'speak-btn', () => player.speak(innerText, element));
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
        updateProgressBar();
    }

    function toggleContainer(container, originalHTML, previewText, buttonContainer) {
        if (container.classList.contains('hidden')) {
            container.innerHTML = originalHTML;
            container.appendChild(buttonContainer);
            container.classList.remove('hidden');
            expandedCount++;
        } else {
            container.innerHTML = `<span class="collapsible-icon">></span><span class="preview-text">${previewText}</span>`;
            container.appendChild(buttonContainer);
            container.classList.add('hidden');
            expandedCount = Math.max(0, expandedCount - 1);
        }
        updateProgressBar();
    }

    function updateProgressBar() {
        const percentage = (expandedCount / totalCount * 100).toFixed(0);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }

    function createButton(text, className, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        if (className) button.className = className;
        button.onclick = onClick;
        return button;
    }

    function copyText(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied successfully!');
        }).catch(err => {
            alert('Failed to copy text: ', err);
        });
    }
})();
