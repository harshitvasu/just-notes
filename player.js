// player.js
export class Player {
  constructor() {
      this.selectedVoice = localStorage.getItem('last-used-voice') || "Samantha";
      this.selectedRate = localStorage.getItem('last-used-rate') || 0.75;
      this.selectedGap = localStorage.getItem('last-used-gap') || 750;
      this.currentPlayingParagraph = null;

      this.createControlPanel();
      this.createSettingsPopup();
      this.populateVoiceList();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => this.populateVoiceList();
      }
  }

  createControlPanel() {
      this.controlPanel = document.createElement('div');
      this.controlPanel.id = 'control-panel';

      this.stopButton = this.createButton('⏹️', '', () => {
          window.speechSynthesis.cancel();
          this.playPauseButton.innerHTML = "▶️";
          this.stopButton.style.opacity = 0.2;
          this.playPauseButton.style.opacity = 0.2;
          this.togglePlaying(null, false);
      });
      this.stopButton.id = 'stop-button';
      this.stopButton.style.opacity = 0.2;

      this.playPauseButton = this.createButton('▶️', '', () => this.toggleSpeech());
      this.playPauseButton.id = 'play-pause-button';
      this.playPauseButton.style.opacity = 1.0;

      const settingsButton = this.createButton('⚙️', 'settings-button', () => this.toggleSettingsPopup());

      this.controlPanel.appendChild(this.stopButton);
      this.controlPanel.appendChild(this.playPauseButton);
      this.controlPanel.appendChild(settingsButton);

      document.body.appendChild(this.controlPanel);
  }

  createSettingsPopup() {
      this.settingsPopup = document.createElement('div');
      this.settingsPopup.id = 'settings-popup';

      const voiceLabel = this.createLabel('Voice:', this.settingsPopup);
      this.voiceSelect = document.createElement('select');
      this.settingsPopup.appendChild(this.voiceSelect);

      const rateLabel = this.createLabel('Rate:', this.settingsPopup);
      this.rateInput = this.createNumberInput('0.5', '2', '0.1', this.selectedRate);
      this.settingsPopup.appendChild(this.rateInput);

      const gapLabel = this.createLabel('Gap Time:', this.settingsPopup);
      this.gapTime = this.createNumberInput('500', '2000', '100', this.selectedGap);
      this.settingsPopup.appendChild(this.gapTime);

      const saveButton = this.createButton('Save', '', () => this.saveSettings());
      this.settingsPopup.appendChild(saveButton);

      document.body.appendChild(this.settingsPopup);
  }

  createLabel(text, parent) {
      const label = document.createElement('label');
      label.textContent = text;
      parent.appendChild(label);
      return label;
  }

  createNumberInput(min, max, step, value) {
      const input = document.createElement('input');
      input.type = 'number';
      input.min = min;
      input.max = max;
      input.step = step;
      input.value = value;
      return input;
  }

  createButton(text, className, onClick) {
      const button = document.createElement('button');
      button.textContent = text;
      if (className) button.className = className;
      button.onclick = onClick;
      return button;
  }

  toggleSettingsPopup() {
      if (!document.body.classList.contains('show-settings-popup')) {
          document.body.classList.add('show-settings-popup');
      } else {
          document.body.classList.remove('show-settings-popup');
      }
  }

  populateVoiceList() {
      const synth = window.speechSynthesis;
      const voices = synth.getVoices();
      this.voiceSelect.innerHTML = '';

      voices.forEach(voice => {
          const option = document.createElement('option');
          option.textContent = `${voice.name} (${voice.lang})`;
          option.value = voice.name;
          this.voiceSelect.appendChild(option);
      });

      const lastUsedVoice = localStorage.getItem('last-used-voice');
      const defaultVoice = voices.find(v => v.name === lastUsedVoice) || voices.find(v => v.name === "Samantha") || voices[0];

      if (defaultVoice) {
          this.voiceSelect.value = defaultVoice.name;
          this.selectedVoice = defaultVoice.name;
      }
  }

  saveSettings() {
      this.selectedVoice = this.voiceSelect.value;
      this.selectedRate = parseFloat(this.rateInput.value);
      this.selectedGap = parseFloat(this.gapTime.value);
      document.body.classList.remove('show-settings-popup');
      localStorage.setItem('last-used-voice', this.selectedVoice);
      localStorage.setItem('last-used-rate', this.selectedRate);
      localStorage.setItem('last-used-gap', this.selectedGap);
  }

  togglePlaying(paragraph, isPlaying) {
      if (this.currentPlayingParagraph) {
          this.currentPlayingParagraph.classList.remove('playing');
          if (!isPlaying) {
              this.currentPlayingParagraph.classList.add('completed');
          }
      }
      if (isPlaying && paragraph) {
          paragraph.classList.add('playing');
          this.currentPlayingParagraph = paragraph;
      } else {
          this.currentPlayingParagraph = null;
      }
  }

  speak(text, paragraph) {
      const synth = window.speechSynthesis;
      const voices = synth.getVoices();
      const voice = voices.find(v => v.name === this.selectedVoice);
      const parts = this.splitTextIntoParts(text);

      const speakPart = (index) => {
          if (index >= parts.length) return;

          const part = parts[index];
          const msg = new SpeechSynthesisUtterance(part);
          msg.voice = voice;
          msg.rate = this.selectedRate;

          msg.onend = () => {
              if (index < parts.length - 1) {
                  setTimeout(() => speakPart(index + 1), this.selectedGap);
              } else {
                  this.togglePlaying(paragraph, false);
                  this.playPauseButton.innerHTML = "▶️";
                  this.playPauseButton.style.opacity = 0.2;
                  this.stopButton.style.opacity = 0.2;
              }
          };

          this.playPauseButton.style.opacity = 1.0;
          this.stopButton.style.opacity = 1.0;
          this.togglePlaying(paragraph, true);
          synth.speak(msg);
      };

      this.playPauseButton.innerHTML = "⏸️";
      speakPart(0);
  }

  splitTextIntoParts(text) {
      const parts = text.split(/(\n|(?<![A-Z])[.])/);
      for (let i = parts.length - 2; i >= 0; i--) {
          if (parts[i + 1] === '.') {
              parts[i] += parts[i + 1];
              parts.splice(i + 1, 1);
          }
      }
      return parts;
  }

  toggleSpeech() {
      const synth = window.speechSynthesis;
      if (synth.paused) {
          synth.resume();
          this.playPauseButton.innerHTML = "⏸️";
      } else if (synth.speaking) {
          synth.pause();
          this.playPauseButton.innerHTML = "▶️";
      }
  }
}
