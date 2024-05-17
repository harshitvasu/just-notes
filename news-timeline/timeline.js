document.addEventListener('DOMContentLoaded', function() {
  const scienceTimeline = [];
  const environmentTimeline = [];
  const artTimeline = [];
  const polityTimeline = [];
  const economyTimeline = [];

  const finalTimeline = [...scienceTimeline, ...environmentTimeline, ...artTimeline, ...polityTimeline, ...economyTimeline]; 
  const timelineData = finalTimeline .map(event => {
    if (event.date.includes('-')) {
      const years = event.date.split('-');
      // Check if both parts of the date are of length 4
      if (years.length === 2 && years[0].length === 4 && years[1].length === 4) {
          return [
              { "date": years[0], "event": "Start of " + event.event, "tags": event.tags, "details": event.details },
              { "date": years[1], "event": "End of " + event.event, "tags": event.tags }
          ];
      } else {
          // Invalid date format, return empty array or handle accordingly
          return { "date": event.date, "event": event.event, "tags": event.tags, "details": event.details };
      }
  } else {
      return [event];
  }  
  }).flat();

  let activeTags = new Set();
  let allTags = new Set();
  timelineData.forEach(item => {
      item.tags.forEach(tag => allTags.add(tag));
  });

  renderTags(Array.from(allTags));
  renderTimeline(timelineData.sort((a, b) => new Date(parseDate(a.date)) - new Date(parseDate(b.date))));

  function renderTags(tags) {
      const specificTags = [
        // "Marathas",
        // "Delhi",
        // "Military Conflict",
        // "Architecture",
        // "British East India Company",
        // "European Conflict",
        // "British Empire",
        // "French Empire",
        // "Anglo-French Struggle",
        // "British",
        // "Policies",
        // "Maratha Empire",
        // "Mughals",
        // "Bengal",
        // "Portuguese Empire",
        // "Exploration",
        // "Trade",
        // "Governance",
        // "Administrative Change",
        // "English East India Company",
        // "French East India Company",
        // "Carnatic Wars",
        // "Anglo-French Rivalry",
        // "Britain",
        // "Naval Conflict",
        // "United States",
        // "East India Company",
        // "World War I",
        // "World War II",
        // "Dutch",
        // "Treaty",
        // "Governor of Bengal",
        // "Military Leadership",
        // "War",
        // "War Declaration",
        // "Naval Military",
        // "Leadership",
        // "British Conflict",
        // "Peace Agreement",
        // "Internal Conflict",
        // "Leadership Change",
        // "British Factory",
        // "British Expulsion",
        // "Sikh History",
        // "Punjab",
        // "Sikh Empire",
        // "Kashmir",
        // "Rajput States",
        // "Awadh",
        // "British Administration",
        // "Nepal",
        // "Bhutan",
        // "Burma",
        // "Independence",
        // "Tibet",
        // "North-West Frontier",
        // "North-West Frontier Province",
        // "Pakistan",
        // "British Officials",
        // "Administration",
        // "Conflicts",
        // "Reforms",
        // "Economic Policies",
        // "Administrative Reforms",
        // "Social Reforms",
        // "Viceroy of India",
        // "Diplomacy",
        // "Education",
        // "Expansionism",
        // "Infrastructure Development",
        // "Social Justice",
        // "Modernization",
        // "Infrastructure",
        // "Indian National Congress",
        // "Nationalist Movements",
        // "Self-Governance",
        // "Indian Nationalism",
        // "Social Reform",
        // "Economic Development",
        // "Welfare Programs",
        // "Quit India Movement",
        // "Independence Movement",
        // "Communal Tensions",
        // "Partition of India",
        "Spectrum Chapter 1", 
        "Spectrum Chapter 5"
];
      const container = document.querySelector('.tag-buttons');
      container.innerHTML = ''; // Clear previous tags
      const allButton = document.createElement('button');
      allButton.textContent = 'Show All';
      allButton.classList.add(activeTags.size === 0 ? 'active' : '');
      allButton.onclick = () => {
          activeTags.clear();
          allButton.classList.add('active');
          document.querySelectorAll('.tag-button').forEach(btn => btn.classList.remove('active'));
          renderTimeline(timelineData);
      };
      container.appendChild(allButton);

      (specificTags || tags).forEach(tag => {
          const button = document.createElement('button');
          button.textContent = tag;
          button.classList.add('tag-button');
          button.onclick = () => {
              if (activeTags.has(tag)) {
                  activeTags.delete(tag);
                  button.classList.remove('active');
              } else {
                  activeTags.add(tag);
                  button.classList.add('active');
              }
              filterTimeline();
          };
          container.appendChild(button);
      });
  }
  function renderTimeline(data) {
    const container = document.querySelector('.timeline');
    container.innerHTML = ''; // Clear previous contents
    data.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';

        const dot = document.createElement('div');
        dot.className = 'dot';

        const dateLabel = document.createElement('div');
        dateLabel.className = 'date';
        dateLabel.textContent = event.date; // Optionally use parseDate(event.date)

        const eventBox = document.createElement('div');
        eventBox.className = 'event-box';
        
        // Initially displaying truncated text
        eventBox.innerHTML = `<strong>${event.event}</strong><br>` + truncateText(event.details || "", 100);
        eventBox.dataset.fullText = `<strong>${event.event}</strong><br>` + (event.details || "");
        eventBox.dataset.truncatedText = `<strong>${event.event}</strong><br>` + truncateText(event.details || "", 100);
        eventBox.dataset.expanded = "false"; // Track whether the text is expanded

        // Click event to toggle full text or truncated
        eventBox.addEventListener('click', function() {
            if (eventBox.dataset.expanded === "false") {
                eventBox.innerHTML = eventBox.dataset.fullText;
                eventBox.dataset.expanded = "true";
            } else {
                eventBox.innerHTML = eventBox.dataset.truncatedText;
                eventBox.dataset.expanded = "false";
            }
        });

        eventElement.appendChild(dot);
        eventElement.appendChild(dateLabel);
        eventElement.appendChild(eventBox);
        container.appendChild(eventElement);
    });
}

// Helper function to truncate text
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}


// Helper function to truncate text
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}


  function parseDate(dateStr) {
    // Handle different date formats
    if (dateStr.includes('-')) {
        const parts = dateStr.split('-');
        switch (parts.length) {
            case 2:
                // Determine if format is 'MM-YYYY' or 'YYYY-YYYY'
                if (parts[0].length <= 2 && parts[1].length === 4) {
                  // Format is (potentially) 'MM-YYYY'
                  const month = parseInt(parts[0], 10); 
                  if (month >= 1 && month <= 12) { // Ensure it's a valid month
                      return new Date(parseInt(parts[1], 10), month - 1, 1);
                  }
              }
                break;
            case 3:
                // Format is 'DD-MM-YYYY'
                return new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
        }
    } else {
        // Single year format 'YYYY'
        return new Date(parseInt(dateStr, 10), 0, 1);
    }

    // Default return current date if no format matches
    return new Date();
}


  function filterTimeline() {
      const filteredData = timelineData.filter(item => 
          activeTags.size === 0 || item.tags.some(tag => activeTags.has(tag))
      );
      renderTimeline(filteredData.sort((a, b) => new Date(parseDate(a.date)) - new Date(parseDate(b.date))));
  }
});

// timeline.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const closeBtn = document.querySelector('.close-btn');
  const tagsDiv = document.querySelector('.tag-buttons');

  hamburger.addEventListener('click', function() {
      tagsDiv.classList.add('open'); // Open the div
      closeBtn.style.display = 'block'; // Show close button
  });

  closeBtn.addEventListener('click', function() {
      tagsDiv.classList.remove('open'); // Close the div
      closeBtn.style.display = 'none'; // Hide close button
  });
});
