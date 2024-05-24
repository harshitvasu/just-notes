User

Give timelines of the above in format of json example
{
      "date": "1737-1739",
      "event": "Maratha Invasion of Delhi under Baji Rao I",
      "detail": "this will contain detail information"
      "tags": ["Marathas", "Baji Rao I", "Delhi"]
    }
Date is parsed using below formula: 
function parseDate(dateStr) {
      // Assumes the date is either a single year or a year range in 'YYYY-YYYY' format
      if (dateStr.includes('-')) {
          return new Date(parseInt(dateStr.split('-')[0], 10), 0, 1);
      } else {
          return new Date(parseInt(dateStr, 10), 0, 1);
      }
  }
Tags can be either: Political unit(Eg: British East India Company, British Empire, INC); Place(Bangalore, Kolkata), Event type: "Military Conflict", "Conference", "INC Meeting", "Disaster" etc. or Person involved eg.: "Gandhi", "Robert Clive", "Simon"