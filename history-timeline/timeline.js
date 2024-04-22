document.addEventListener('DOMContentLoaded', function() {
  const marathaTimeline  = [
    {
      "date": "1674",
      "event": "Establishment of Maratha Empire under Shivaji Maharaj",
      "tags": ["Marathas", "Shivaji Maharaj", "Mughal Empire"]
    },
    {
      "date": "1680",
      "event": "Death of Shivaji Maharaj",
      "tags": ["Marathas", "Shivaji Maharaj", "Death"]
    },
    {
      "date": "1707",
      "event": "Death of Aurangzeb, Decline of Mughal Empire",
      "tags": ["Marathas", "Mughal Empire", "Death"]
    },
    {
      "date": "1714",
      "event": "Appointment of Peshwa Balaji Vishwanath",
      "tags": ["Marathas", "Peshwa Balaji Vishwanath"]
    },
    {
      "date": "1737-1739",
      "event": "Maratha Invasion of Delhi under Baji Rao I",
      "tags": ["Marathas", "Baji Rao I", "Delhi"]
    },
    {
      "date": "1740",
      "event": "Treaty of Ahmadnagar with Mughals",
      "tags": ["Marathas", "Mughal Empire"]
    },
    {
      "date": "1741-1742",
      "event": "Maratha Siege of Trichinopoly",
      "tags": ["Marathas", "Trichinopoly"]
    },
    {
      "date": "1751-1752",
      "event": "Third Battle of Panipat: Marathas defeated by Ahmad Shah Durrani",
      "tags": ["Marathas", "Military Conflict", "Panipat", "Ahmad Shah Durrani"]
    },
    {
      "date": "1761",
      "event": "Battle of Panipat: Marathas defeated by Ahmad Shah Durrani",
      "tags": ["Marathas", "Military Conflict","Panipat",  "Ahmad Shah Durrani"]
    },
    {
      "date": "1768",
      "event": "Construction of Shaniwar Wada in Pune",
      "tags": ["Marathas", "Architecture"]
    },
    {
      "date": "1775-1782",
      "event": "First Anglo-Maratha War",
      "tags": ["Marathas", "Military Conflict", "British East India Company"]
    },
    {
      "date": "1802-1803",
      "event": "Second Anglo-Maratha War",
      "tags": ["Marathas", "Military Conflict", "British East India Company"]
    },
    {
      "date": "1817-1818",
      "event": "Third Anglo-Maratha War: End of Maratha Empire",
      "tags": ["Marathas", "Military Conflict", "British East India Company"]
    }
  ]
  const britishTimeline = [
    {
      "date": "1739-1748",
      "event": "War of the Austrian Succession in Europe",
      "tags": ["European Conflict", "War of the Austrian Succession"]
    },
    {
      "date": "1740",
      "event": "Anglo-French struggle for supremacy begins in India",
      "details": "The War of the Austrian Succession in Europe triggers a rivalry between British and French colonial interests in India as part of their global struggle for dominance. This marks the beginning of the Anglo-French struggle for supremacy in the Indian subcontinent.",
      "tags": ["British Empire", "French Empire", "Anglo-French Struggle"]
    },    
    {
      "date": "1757",
      "event": "Battle of Plassey: British defeat Nawab of Bengal Siraj-ud-Daulah",
      "details": "The Battle of Plassey is a pivotal moment in Indian history, where the British East India Company, led by Robert Clive, decisively defeats the Nawab of Bengal, Siraj-ud-Daulah. This victory establishes British dominance in Bengal and marks the beginning of direct British involvement in Indian affairs.",
      "tags": ["British East India Company", "Battle of Plassey", "Nawab of Bengal", "Robert Clive"]
    },
    {
      "date": "1751",
      "event": "Defense of Arcot by Robert Clive",
       "details": "Robert Clive defended Arcot during the Carnatic Wars, marking a significant early victory that helped establish British military reputation in India.",
      "tags": ["British", "Military Conflict", "Arcot"]
    },
    {
        "date": "1757",
        "event": "Battle of Plassey",
         "details": "The Battle of Plassey was led by Robert Clive against the Nawab of Bengal, a pivotal event that secured British dominance in Bengal and laid the foundation for British rule in India.",
        "tags": ["British", "Military Conflict", "Plassey"]
    },
    {
        "date": "1772-1785",
        "event": "Governor-Generalship of Warren Hastings",
         "details": "Warren Hastings served as the first Governor-General of India, overseeing the consolidation of British administration and the implementation of significant judicial and administrative reforms.",
        "tags": ["British", "British East India Company"]
    },
    {
        "date": "1773",
        "event": "Implementation of the Regulating Act",
         "details": "The Regulating Act was enacted during the governorship of Warren Hastings, establishing a framework for better governance and control over company affairs in India.",
        "tags": ["British", "British East India Company"]
    },
    {
        "date": "1819",
        "event": "Governorship of Mountstuart Elphinstone in Bombay",
         "details": "Mountstuart Elphinstone's tenure as Governor of Bombay was marked by educational and administrative reforms, significantly impacting the region's development.",
        "tags": ["British", "British East India Company", "Bombay"]
    },
    {
        "date": "1820-1827",
        "event": "Governorship of Thomas Munro in Madras",
         "details": "Sir Thomas Munro was known for his implementation of the Ryotwari system, which reformed land tax policies directly affecting the cultivators in the Madras Presidency.",
        "tags": ["British", "British East India Company", "Madras"]
    },
    {
        "date": "1848-1856",
        "event": "Governor-Generalship of Marquess of Dalhousie",
         "details": "The Marquess of Dalhousie implemented the Doctrine of Lapse, leading to the annexation of several princely states and significantly expanding British territory in India.",
        "tags": ["British", "British East India Company", "Policies"]
    },
    {
        "date": "1803",
        "event": "Battles of the Second Anglo-Maratha War",
         "details": "General Gerard Lake led British forces to victory against the Marathas in key battles during the Second Anglo-Maratha War, securing British dominance in North India.",
        "tags": ["British", "Military Conflict", "Maratha Empire"]
    },
    {
        "date": "1809",
        "event": "Battle of Talavera",
         "details": "Arthur Wellesley, later known as the Duke of Wellington, distinguished himself in the Battle of Talavera during the Peninsular War in Spain.",
        "tags": ["British", "Military Conflict", "Talavera"]
    }
  ]
  // Timeline corresponding to the history of Britain in isolation
  const britainTimeline = [
    {
      "date": "1534",
      "event": "Act of Supremacy",
      "details": "King Henry VIII declared himself the Supreme Head of the Church of England, marking the formal beginning of the English Reformation. This act separated the English church from the Roman Catholic Church and established the monarch as the religious authority.",
      "tags": ["Britain"]
    },
    {
      "date": "1588",
      "event": "Defeat of the Spanish Armada",
      "details": "The Spanish Armada, a great fleet sent by Spain against England, was defeated by the English navy under the command of Sir Francis Drake. This victory established England as a dominant sea power and marked a turning point in English national confidence.",
      "tags": ["Britain","Naval Conflict"]
    },
    {
      "date": "1600",
      "event": "Establishment of the British East India Company",
      "details": "Queen Elizabeth I granted a Royal Charter to the British East India Company, giving it a monopoly over English trade in the East Indies. The company eventually played a central role in establishing British dominance in India.",
      "tags": ["Britain","British East India Company"]
    },
    {
      "date": "1642-1649",
      "event": "English Civil War",
      "details": "A series of armed conflicts and political machinations between Parliamentarians ('Roundheads') and Royalists ('Cavaliers') over, principally, the manner of England's governance and issues of religious freedoms. The war ended with the trial and execution of Charles I, the abolition of the monarchy, and the establishment of the Commonwealth under Oliver Cromwell.",
      "tags": ["Britain"]
    },
    {
      "date": "1665-1666",
      "event": "Great Plague of London",
      "details": "The last major epidemic of the bubonic plague in England hit London, killing an estimated 100,000 people, almost a quarter of London's population in 18 months.",
      "tags": ["Britain", "Disaster"]
    },
    {
      "date": "1688",
      "event": "Glorious Revolution",
      "details": "The overthrow of King James II of England by a union of English Parliamentarians with the Dutch stadtholder William III of Orange-Nassau (William of Orange). This event marked the beginning of a constitutional monarchy in England.",
      "tags": ["Britain"]
    },
    {
      "date": "1707",
      "event": "Acts of Union",
      "details": "The Acts of Union were parliamentary acts that unified the Kingdom of England and the Kingdom of Scotland into a single, united kingdom named 'Great Britain'. This union also led to political consolidation and the establishment of a single parliament at the Palace of Westminster.",
      "tags": ["Britain"]
    },
    {
      "date": "1756-1763",
      "event": "Seven Years' War",
      "details": "A global conflict that pitted the major European powers and their colonies against each other, predominantly seeing Britain and Prussia against France, Austria, and their allies. The war resulted in significant territorial changes, with Britain gaining control of Canada and various territories in India from France.",
      "tags": ["Britain", "Military Conflict"]
    },
    {
      "date": "1776",
      "event": "American Declaration of Independence",
      "details": "The Thirteen American Colonies declared independence from British rule, leading to the American Revolutionary War. This marked the beginning of the end of British colonial rule in America.",
      "tags": ["Britain","American Revolution", "United States"]
    },
    {
      "date": "1805",
      "event": "Battle of Trafalgar",
      "details": "A naval engagement fought by the British Royal Navy against the combined fleets of the French and Spanish Navies during the Napoleonic Wars. This battle confirmed British naval supremacy and was marked by the death of Admiral Horatio Nelson.",
      "tags": ["Britain"]
    },
    {
      "date": "1857",
      "event": "Indian Rebellion of 1857",
      "details": "A major, but ultimately unsuccessful, uprising in India against the rule of the British East India Company, which functioned as a sovereign power on behalf of the British Crown. The rebellion led to the dissolution of the Company in 1858 and the reorganization of British rule in India under the crown.",
      "tags": ["Britain","East India Company", "India"]
    },
    {
      "date": "1914-1918",
      "event": "World War I",
      "details": "World War I was a global conflict originating in Europe that lasted from 1914 to 1918. Central Powers, led by Germany, Austria-Hungary, and the Ottoman Empire fought against the Allies, led by Britain, France, Russia, Italy, and later the United States. It resulted in massive casualties and significant geopolitical changes, including the dissolution of empires and redrawing of borders.",
      "tags": ["Britain","World War I", "Military Conflict"]
    },
    {
      "date": "1939-1945",
      "event": "World War II",
      "details": "World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's nations—including all of the great powers—forming two opposing military alliances: the Allies and the Axis. It was the most widespread war in history, and it directly involved more than 100 million people from over 30 countries.",
      "tags": ["Britain","World War II","Military Conflict"]
    }
  ]
  const bengalGovernorGeneralsTimeline = [
    {
      "date": "1681-1684",
      "event": "Agent of Bengal: Robert Hedges",
      "details": "Robert Hedges serves as the Agent of Bengal during this period, marking the early British commercial activities in Bengal.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Robert Hedges",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1690s",
      "event": "Chief Agent of Bengal: Job Charnock",
      "details": "Job Charnock is credited with founding Calcutta during the 1690s, establishing a significant milestone in British colonial presence in India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Calcutta",
        "Job Charnock",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1698-1706",
      "event": "Governor of Fort William (Calcutta): Charles Eyre",
      "details": "Charles Eyre's tenure witnesses the expansion of British trade networks in Bengal, contributing to the growing influence of the British East India Company in the region.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Fort William",
        "Bengal",
        "Charles Eyre",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1708-1709",
      "event": "Governor of Fort William (Calcutta): Edward Littleton",
      "details": "Details about Edward Littleton's tenure are not provided.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Fort William",
        "Calcutta",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1719-1720",
      "event": "Agent of Bengal: Roger Drake",
      "details": "Roger Drake consolidates British trade interests in Bengal during his tenure, strengthening the presence of the British East India Company in the region.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Roger Drake",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1720-1727",
      "event": "Governor of Fort William (Calcutta): Nicholas Morse",
      "details": "Nicholas Morse's tenure sees the expansion of British trade networks and the establishment of ties with locals in Bengal, further solidifying British influence in the region.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Fort William",
        "Bengal",
        "Nicholas Morse",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1727-1732",
      "event": "Governor of Fort William (Calcutta): Richard Barwell",
      "details": "Richard Barwell plays a significant role in the development of Calcutta as a trading hub during his tenure, facilitating increased commerce and economic activity.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Fort William",
        "Calcutta",
        "Richard Barwell",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1758-1760",
      "event": "Governor of Bengal: Robert Clive",
      "details": "Robert Clive's tenure as Governor of Bengal is marked by the consolidation of British control after the decisive Battle of Plassey, securing significant territorial gains for the British East India Company.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Robert Clive",
        "Battle of Plassey",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1767-1769",
      "event": "Governor of Bengal: Harry Verelst",
      "details": "Harry Verelst focuses on establishing administrative structures in Bengal during his tenure, laying the groundwork for efficient governance.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Harry Verelst",
        "Administration",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1769-1772",
      "event": "Governor of Bengal: John Cartier",
      "details": "John Cartier continues the process of administrative reforms initiated by his predecessor, Harry Verelst, aiming to improve governance in Bengal.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "John Cartier",
        "Administration",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1772-1785",
      "event": "Governor-General of Bengal: Warren Hastings",
      "details": "Warren Hastings leads significant administrative reforms during his tenure as Governor-General of Bengal, facing numerous conflicts and challenges in the process.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Warren Hastings",
        "Administration",
        "Conflicts",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1786-1793",
      "event": "Governor-General of Bengal: Lord Cornwallis",
      "details": "Lord Cornwallis introduces the Permanent Settlement and other reforms during his tenure, leaving a lasting impact on British governance in Bengal.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord Cornwallis",
        "Permanent Settlement",
        "Reforms",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1793-1798",
      "event": "Governor-General of Bengal: Sir John Shore",
      "details": "Sir John Shore's tenure witnesses the enactment of the Charter Act of 1793 and a policy of non-intervention, reflecting evolving British colonial strategies.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Sir John Shore",
        "Charter Act of 1793",
        "Non-intervention",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1798-1805",
      "event": "Governor-General of Bengal: Lord Wellesley",
      "details": "Lord Wellesley introduces the Subsidiary Alliance System, a significant policy shift aimed at expanding British influence in India through strategic alliances.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord Wellesley",
        "Subsidiary Alliance System",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1805-1807",
      "event": "Acting Governor-General of India: Sir George Barlow",
      "details": "Sir George Barlow focuses on economic policies and retrenchment during his short tenure as Acting Governor-General of India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "India",
        "Sir George Barlow",
        "Economic Policies",
        "Retrenchment",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1807-1813",
      "event": "Governor-General of Bengal: Lord Minto I",
      "details": "Lord Minto I concludes the Treaty of Amritsar and oversees the implementation of the Charter Act of 1813, shaping British policies in India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord Minto I",
        "Treaty of Amritsar",
        "Charter Act of 1813",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1813-1823",
      "event": "Governor-General of Bengal: Lord Hastings",
      "details": "Lord Hastings ends the policy of non-intervention and initiates significant administrative reforms during his tenure, contributing to the consolidation of British power in India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord Hastings",
        "Administrative Reforms",
        "Consolidation of Power",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1823-1828",
      "event": "Governor-General of Bengal: Lord Amherst",
      "details": "Lord Amherst's tenure is marked by the annexation of Assam and the Mutiny of Barrackpore, highlighting the challenges of British rule in India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord Amherst",
        "Assam Annexation",
        "Mutiny of Barrackpore",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1828-1833",
      "event": "Governor-General of Bengal: Lord William Bentinck",
      "details": "Lord William Bentinck implements significant social reforms during his tenure, including the abolition of Sati, marking a pivotal moment in British colonial governance.",
      "tags": [
        "British Officials",
        "British East India Company",
        "Bengal",
        "Lord William Bentinck",
        "Sati Abolition",
        "Social Reforms",
        "Spectrum Chapter 5"
      ]
    },
    {
      "date": "1833-1835",
      "event": "Governor-General of India: Lord William Bentinck",
      "details": "As Governor-General of India, Lord William Bentinck oversees the implementation of the Charter Act of 1833, further shaping British colonial policies in India.",
      "tags": [
        "British Officials",
        "British East India Company",
        "India",
        "Lord William Bentinck",
        "Charter Act of 1833",
        "Colonial Policies",
        "Spectrum Chapter 5"
      ]
    }
  ]

  const viceroysOfIndiaTimeline = [
    {
      "date": "1858-1862",
      "event": "Lord Canning as Viceroy of India",
      "details": "Lord Canning abolished the doctrine of lapse during his tenure as Viceroy of India.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1862-1863",
      "event": "Lord Elgin as Viceroy of India",
      "details": "The Wahabi Movement took place during Lord Elgin's tenure as Viceroy of India.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1864-1869",
      "event": "Lord Lawrence as Viceroy of India",
      "details": "During Lord Lawrence's tenure as Viceroy of India, the High court in Calcutta and Madras was established. The Anglo-Bhutanese war also occurred.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1869-1872",
      "event": "Lord Mayo as Viceroy of India",
      "details": "Lord Mayo introduced financial distribution between the center and state for the first time. The first census was conducted in 1872. Additionally, Mayo College for the royal elite was set up. Notably, Lord Mayo was the only Governor-General who was killed in India, assassinated by Sher Ali Afridi in Port Blair. Moreover, the Statistical Survey of India was established during his tenure.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1872-1876",
      "event": "Lord Northbrook as Viceroy of India",
      "details": "Civil Marriage and Arya Samaj marriage were introduced during Lord Northbrook's tenure as Viceroy of India. The Universal Marriage Act was also introduced in 1872, allowing intercaste marriage. Additionally, the Kuka Movement took place in Punjab.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1876-1880",
      "event": "Lord Lytton as Viceroy of India",
      "details": "During Lord Lytton's tenure as Viceroy of India, the Vernacular Press Act of 1878 and Arms Act of 1878 were enacted. His policies faced criticism from nationalists due to high taxation and famine response. He organized the durbar and proclaimed Queen Victoria “The Empress of India”. Furthermore, he abolished tax on cotton for British traders and lowered the maximum age to take up civil services exam from 21 to 19.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1880-1884",
      "event": "Lord Ripon as Viceroy of India",
      "details": "Lord Ripon was known as the most loved Governor-General. He repealed the controversial Arms and Vernacular Press Acts. Moreover, he set up Local self-governments-Panchayats and Municipal Boards, earning him the title of the Father of Self Government. Two new universities were opened during his tenure-Punjab University in 1884 and Allahabad University in 1887. The Illbert Bill, which stated that an Indian judge cannot try an English Judge, was introduced. Additionally, the Hunter Commission was appointed.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1884-1888",
      "event": "Lord Dufferin as Viceroy of India",
      "details": "During Lord Dufferin's tenure, the Third Anglo-­‐Burmese war took place in 1885-­‐1886. Moreover, the Indian National Congress was founded in 1885.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1888-1894",
      "event": "Lord Lansdowne as Viceroy of India",
      "details": "The Indian Councils Act of 1892, introducing indirect elections for the first time, was enacted during Lord Lansdowne's tenure. Additionally, the Factory Act of 1891 was implemented.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1894-1899",
      "event": "Lord Elgin II as Viceroy of India",
      "details": "During Lord Elgin II's tenure, the First British Officer called Rands was killed by Chapekar (Ramkrishna & Damodar) Brothers. This was the first political murder in India.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1899-1905",
      "event": "Lord Curzon as Viceroy of India",
      "details": "Lord Curzon introduced the Indian Universities act to control Indian Universities. The Raleigh Commission was appointed, and the Partition of Bengal was carried out, leading to the Curzon-Kitchener controversy.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1905-1910",
      "event": "Lord Minto II as Viceroy of India",
      "details": "Lord Minto II implemented the Morley-Minto reforms during his tenure.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1910-1916",
      "event": "Lord Hardinge II as Viceroy of India",
      "details": "During Lord Hardinge II's tenure, the Mesopotamian Campaign took place. Additionally, the capital was transferred from Calcutta to Delhi. The Hindu Mahasabha was established by Madan Mohan Malaviya.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1916-1921",
      "event": "Lord Chelmsford as Viceroy of India",
      "details": "During Lord Chelmsford's tenure, the Home Rule League Movements gained momentum. The Rowlatt Act was passed, and the Montague-Chelmsford reform was implemented.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1921-1926",
      "event": "Lord Reading as Viceroy of India",
      "details": "Swaraj Party was formed during Lord Reading's tenure. The Chauri-Chaura incident took place.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1926-1931",
      "event": "Lord Irwin as Viceroy of India",
      "details": "Lord Irwin launched the civil disobedience movement and Dandi march during his tenure. Additionally, the first round table conference was held.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1931-1936",
      "event": "Lord Willingdon as Viceroy of India",
      "details": "During Lord Willingdon's tenure, the Second & Third Round Table Conferences were held. The Poona pact was signed, and the Communal award was started.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1936-1944",
      "event": "Lord Linlithgow as Viceroy of India",
      "details": "During Lord Linlithgow's tenure, the Cripps Mission took place. The Quit India movement was initiated.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1944-1947",
      "event": "Lord Wavell as Viceroy of India",
      "details": "Lord Wavell introduced the CR Formula in 1944. Direct Action day was launched during his tenure. Additionally, the Wavell Plan and Shimla conference were significant events.",
      "tags": ["Viceroy of India"]
    },
    {
      "date": "1947-48",
      "event": "Lord Mountbatten as Viceroy of India",
      "details": "Lord Mountbatten's tenure marked the implementation of the June 3rd Plan. He served as the last Viceroy and the first Governor-General of free India.",
      "tags": ["Viceroy of India"]
    }
  ]
  const governorGeneralsOfIndiaTimeline = [
    {
        "date": "1786-1793",
        "event": "Governor-Generalship of Charles Cornwallis",
        "details": "Charles Cornwallis served as Governor-General of Bengal from 1786 to 1793. During his tenure, he introduced the Permanent Settlement, which aimed to stabilize land revenue and provide a fixed income to the East India Company. This system involved fixing the revenue to be paid by landholders to the Company in perpetuity, leading to significant changes in land ownership and agricultural practices. Cornwallis also implemented other administrative reforms aimed at streamlining governance and improving efficiency in Bengal. His tenure marked a period of significant transformation in British colonial administration in India.",
        "tags": ["British East India Company", "Permanent Settlement", "Administrative Reforms", "Spectrum Chapter 5"]
    },
    {
        "date": "1793-1798",
        "event": "Governor-Generalship of John Shore (Lord Teignmouth)",
        "details": "John Shore, also known as Lord Teignmouth, served as Governor-General of Bengal from 1793 to 1798. One of the notable events during his tenure was the enactment of the Charter Act of 1793. This legislation brought significant changes to the governance structure in British India, including the establishment of a Board of Control to oversee the administration of the East India Company's territories. Additionally, Shore's policy of non-intervention characterized this period, marking a departure from previous British interventionist approaches. His tenure saw efforts to maintain peace and stability in Bengal through diplomatic means rather than direct interference in local affairs.",
        "tags": ["Charter Act of 1793", "Non-intervention Policy", "Diplomacy", "Spectrum Chapter 5"]
    },
    {
        "date": "1798-1805",
        "event": "Governor-Generalship of Richard Wellesley (Marquess Wellesley)",
        "details": "Richard Wellesley, also known as Marquess Wellesley, served as Governor-General of Bengal from 1798 to 1805. His tenure was marked by the introduction of the Subsidiary Alliance System, a significant diplomatic policy aimed at extending British influence and control over Indian states. Under this system, Indian rulers were required to accept British protection and station British troops in their territories in exchange for British military support and non-interference in internal affairs. Wellesley's policies laid the groundwork for the expansion of British hegemony in India and significantly altered the political landscape of the subcontinent.",
        "tags": ["Subsidiary Alliance System", "British Hegemony", "Diplomacy", "Spectrum Chapter 5"]
    },
    {
        "date": "1805-1807",
        "event": "Acting Governor-Generalship of George Barlow",
        "details": "George Barlow served as Acting Governor-General of India from 1805 to 1807. His tenure was characterized by a focus on economic stability and retrenchment. Barlow implemented measures to reduce government expenditure and increase revenue collection in order to address the financial challenges faced by the East India Company. However, his policies of austerity and cost-cutting measures faced criticism for their impact on local populations and the overall economy. One of the notable events during his tenure was the Vellore Mutiny of 1806, a significant uprising against British rule in South India.",
        "tags": ["Economic Stability", "Retrenchment", "Vellore Mutiny", "Spectrum Chapter 5"]
    },
    {
        "date": "1807-1813",
        "event": "Governor-Generalship of Gilbert Elliot-Murray-Kynynmound (Lord Minto)",
        "details": "Gilbert Elliot-Murray-Kynynmound, also known as Lord Minto, served as Governor-General of Bengal from 1807 to 1813. One of the significant events during his tenure was the conclusion of the Treaty of Amritsar in 1809. This treaty established diplomatic relations between the British East India Company and Maharaja Ranjit Singh of the Sikh Empire, securing the northwestern frontier of British India. Additionally, Lord Minto introduced the Charter Act of 1813, which brought further changes to the governance structure of British India, including the regulation of trade and commerce.",
        "tags": ["Treaty of Amritsar", "Charter Act of 1813", "Diplomacy", "Spectrum Chapter 5"]
    },
    {
        "date": "1813-1823",
        "event": "Governor-Generalship of Francis Rawdon-Hastings (Marquess of Hastings)",
        "details": "Francis Rawdon-Hastings, also known as the Marquess of Hastings, served as Governor-General of Bengal from 1813 to 1823. His tenure marked the end of the policy of non-intervention in British Indian affairs. One of the significant events during his tenure was the Third Anglo-Maratha War, which led to the abolition of the Peshwaship and the extension of British control over large parts of central India. Additionally, Lord Hastings oversaw the establishment of the Ryotwari System in Madras and Bombay, as well as the Mahalwari system in the northwestern Provinces and Bombay, introducing significant changes in land revenue administration.",
        "tags": ["Non-intervention Policy", "Third Anglo-Maratha War", "Ryotwari System", "Mahalwari System", "Spectrum Chapter 5"]
    },
    {
        "date": "1823-1828",
        "event": "Governor-Generalship of William Amherst",
        "details": "William Amherst served as Governor-General of Bengal from 1823 to 1828. His tenure witnessed the annexation of Assam, which was strategically important for British interests in the region. Additionally, one of the significant events during his tenure was the Mutiny of Barrackpore in 1824, where discontent among Indian sepoys erupted into a violent revolt against British authorities. The mutiny posed a significant challenge to British authority in India and highlighted growing tensions between Indian soldiers and British officers.",
        "tags": ["Assam Annexation", "Mutiny of Barrackpore", "British Authority", "Spectrum Chapter 5"]
    },
    {
        "date": "1828-1835",
        "event": "Governor-Generalship of William Bentinck",
        "details": "William Bentinck served as Governor-General of Bengal from 1828 to 1835. His tenure was marked by significant social reforms, including the abolition of Sati in 1829. The practice of Sati, where widows were expected to immolate themselves on their husbands' funeral pyres, had long been a subject of controversy and debate. Bentinck's decision to outlaw Sati was met with both praise and criticism, but it represented a significant step towards social reform and modernization in British India. Additionally, Bentinck implemented other reforms aimed at improving the welfare of Indian society, including measures to promote education and eradicate social evils.",
        "tags": ["Abolition of Sati", "Social Reforms", "Education", "Spectrum Chapter 5"]
    },
        {
            "date": "1835-1836",
            "event": "Governor-Generalship of Charles Metcalfe (Lord Metcalfe)",
            "details": "Charles Metcalfe, also known as Lord Metcalfe, served as Governor-General of India from 1835 to 1836. His brief tenure was marked by efforts to promote administrative efficiency and improve governance in British India. Metcalfe emphasized the importance of consultation and cooperation with local Indian rulers and elites, seeking to build consensus and stability in the region. However, his time in office was cut short by his resignation due to differences with the British government over policy matters.",
            "tags": ["Administrative Efficiency", "Governance", "Local Consultation", "Spectrum Chapter 5"]
        },
        {
            "date": "1842-1844",
            "event": "Governor-Generalship of Edward Law (Lord Ellenborough)",
            "details": "Edward Law, also known as Lord Ellenborough, served as Governor-General of India from 1842 to 1844. His tenure was marked by significant developments in British colonial administration and military affairs. Ellenborough pursued expansionist policies, aiming to extend British influence and control over Indian territories. One of the notable events during his tenure was the First Anglo-Sikh War, which resulted in the annexation of the Punjab region by the British East India Company. Additionally, Ellenborough implemented reforms aimed at modernizing the British Indian army and improving its effectiveness in conflicts with indigenous powers.",
            "tags": ["Expansionism", "First Anglo-Sikh War", "Military Modernization", "Spectrum Chapter 5"]
        },
        {
            "date": "1848-1856",
            "event": "Governor-Generalship of James Broun-Ramsay (Marquess of Dalhousie)",
            "details": "James Broun-Ramsay, also known as the Marquess of Dalhousie, served as Governor-General of India from 1848 to 1856. His tenure was marked by significant reforms and developments in British India. Dalhousie implemented a wide range of administrative, economic, and infrastructural reforms aimed at modernizing and centralizing British rule in India. He is particularly remembered for his ambitious public works projects, including the construction of railways and telegraph lines, which transformed transportation and communication networks across the subcontinent. However, Dalhousie's policies also sparked controversy and resistance, especially his annexationist policies, which led to conflicts with indigenous rulers and contributed to the outbreak of the Indian Rebellion of 1857.",
            "tags": ["Reforms", "Railway Construction", "Telegraph Lines", "Indian Rebellion of 1857", "Spectrum Chapter 5"]
        },
        {
            "date": "1862-1863",
            "event": "Governor-Generalship of James Bruce (Earl of Elgin)",
            "details": "James Bruce, also known as the Earl of Elgin, served as Governor-General of India from 1862 to 1863. His tenure was relatively brief but significant in terms of diplomatic and administrative developments. Elgin focused on strengthening British relations with neighboring states and promoting trade and commerce in the region. One of the notable events during his tenure was the signing of commercial treaties with several princely states, which aimed to facilitate economic cooperation and exchange. Additionally, Elgin pursued measures to improve governance and administrative efficiency within British India, laying the groundwork for future reforms and developments.",
            "tags": ["Diplomacy", "Trade", "Governance", "Spectrum Chapter 5"]
        },
        {
            "date": "1864-1869",
            "event": "Governor-Generalship of John Lawrence",
            "details": "John Lawrence served as Governor-General of India from 1864 to 1869. His tenure was marked by efforts to address financial and administrative challenges facing British India. Lawrence implemented measures to streamline government expenditure, increase revenue collection, and promote economic development in the region. He also focused on improving infrastructure and public services, including the expansion of irrigation systems and the construction of roads and bridges. Additionally, Lawrence played a key role in maintaining peace and stability on the northwest frontier, where tensions with indigenous tribes and neighboring powers posed security threats to British interests.",
            "tags": ["Financial Challenges", "Administrative Reform", "Infrastructure Development", "Frontier Security", "Spectrum Chapter 5"]
        },
        {
            "date": "1880-1884",
            "event": "Governor-Generalship of George Robinson (Lord Ripon)",
            "details": "George Robinson, also known as Lord Ripon, served as Governor-General of India from 1880 to 1884. His tenure was characterized by a commitment to liberal policies and reforms aimed at promoting social justice and administrative efficiency. Ripon's administration introduced significant legislative measures, including the Indian Councils Act of 1883, which expanded Indian representation in legislative councils and marked a step towards increased Indian participation in governance. Additionally, Ripon pursued policies to improve education, land tenure, and civil services, seeking to address social and economic inequalities in British India.",
            "tags": ["Liberal Policies", "Reforms", "Legislative Measures", "Social Justice", "Spectrum Chapter 5"]
        },
        {
            "date": "1883-1885",
            "event": "Governor-Generalship of Frederick Roberts (Earl Roberts)",
            "details": "Frederick Roberts, also known as the Earl Roberts, served as Governor-General of India from 1883 to 1885. His tenure was marked by efforts to maintain peace and stability in British India amidst growing unrest and discontent. Roberts pursued military campaigns against tribal uprisings and border conflicts, seeking to assert British authority and control over frontier regions. One of the significant events during his tenure was the Second Anglo-Afghan War, which aimed to secure British interests in Afghanistan and prevent Russian expansion into Central Asia. Additionally, Roberts focused on modernizing and strengthening the British Indian army, introducing reforms to enhance its capabilities and effectiveness.",
            "tags": ["Military Campaigns", "Second Anglo-Afghan War", "Frontier Security", "Military Modernization", "Spectrum Chapter 5"]
        },
            {
                "date": "1894-1899",
                "event": "Governor-Generalship of Victor Bruce (Earl of Elgin)",
                "details": "Victor Bruce, also known as the Earl of Elgin, served as Governor-General of India from 1894 to 1899. His tenure was marked by efforts to promote administrative efficiency and modernization in British India. Elgin focused on improving governance and infrastructure, including the expansion of railways and telegraph lines, which facilitated communication and transportation across the subcontinent. Additionally, he pursued measures to address social and economic challenges, including reforms to land tenure and taxation systems. Elgin's administration also faced challenges such as famine and unrest in certain regions, requiring concerted efforts to mitigate their impact on local populations.",
                "tags": ["Administrative Efficiency", "Modernization", "Infrastructure", "Famine Relief", "Spectrum Chapter 5"]
            },
            {
                "date": "1899-1905",
                "event": "Governor-Generalship of George Curzon (Marquess Curzon of Kedleston)",
                "details": "George Curzon, also known as the Marquess Curzon of Kedleston, served as Governor-General of India from 1899 to 1905. His tenure was marked by ambitious administrative reforms and imperialist policies aimed at consolidating British control over India. Curzon pursued extensive administrative reorganization, including the division of Bengal in 1905, which sparked controversy and protests among Indian nationalists. Additionally, he focused on expanding British influence in Central Asia and the Persian Gulf, advocating for strategic alliances and territorial acquisitions to safeguard British interests in the region. Curzon's policies were characterized by a combination of modernization efforts and paternalistic governance, reflecting the complexities of British colonial rule in India.",
                "tags": ["Administrative Reforms", "Imperialism", "Partition of Bengal", "Central Asia Policy", "Spectrum Chapter 5"]
            },
            {
                "date": "1905-1910",
                "event": "Governor-Generalship of Gilbert Elliot-Murray-Kynynmound (Lord Minto II)",
                "details": "Gilbert Elliot-Murray-Kynynmound, also known as Lord Minto II, served as Governor-General of India from 1905 to 1910. His tenure was marked by efforts to address growing political unrest and nationalist sentiments in British India. Minto faced challenges such as the Partition of Bengal and the rise of the Indian National Congress, which demanded greater political representation and autonomy for Indians. Despite these challenges, Minto pursued measures to maintain British control and stability in the region, including the promotion of loyalist factions and the suppression of dissent. His policies set the stage for future political developments and paved the way for increased Indian participation in governance.",
                "tags": ["Political Unrest", "Partition of Bengal", "Indian National Congress", "Political Representation", "Spectrum Chapter 5"]
            },
            {
                "date": "1910-1916",
                "event": "Governor-Generalship of Charles Hardinge (Lord Hardinge of Penshurst)",
                "details": "Charles Hardinge, also known as Lord Hardinge of Penshurst, served as Governor-General of India from 1910 to 1916. His tenure was marked by efforts to address political and constitutional reforms in British India. Hardinge oversaw the implementation of the Morley-Minto Reforms in 1909, which aimed to introduce limited political representation for Indians in legislative councils. Additionally, he faced challenges such as rising nationalist movements and the threat of political violence, including the assassination of Sir Curzon Wyllie in 1909. Despite these challenges, Hardinge pursued policies of conciliation and reform, seeking to balance British interests with Indian aspirations for self-governance.",
                "tags": ["Morley-Minto Reforms", "Nationalist Movements", "Political Violence", "Conciliation", "Spectrum Chapter 5"]
            },
            {
                "date": "1916-1921",
                "event": "Governor-Generalship of Frederic Thesiger (Lord Chelmsford)",
                "details": "Frederic Thesiger, also known as Lord Chelmsford, served as Governor-General of India from 1916 to 1921. His tenure was marked by significant political developments and challenges, including the implementation of the Montagu-Chelmsford Reforms in 1919. These reforms represented a significant step towards self-governance for India, introducing elected legislative assemblies at the provincial and central levels. However, they fell short of Indian nationalist demands for full autonomy and led to widespread disappointment and disillusionment among Indian political leaders. Additionally, Chelmsford's tenure saw the tragic incident of the Jallianwala Bagh massacre in 1919, where British troops opened fire on peaceful protesters in Amritsar, resulting in hundreds of casualties and sparking outrage across India and around the world.",
                "tags": ["Montagu-Chelmsford Reforms", "Self-Governance", "Jallianwala Bagh Massacre", "Indian Nationalism", "Spectrum Chapter 5"]
            },
            {
                "date": "1921-1926",
                "event": "Governor-Generalship of Rufus Isaacs (Earl of Reading)",
                "details": "Rufus Isaacs, also known as the Earl of Reading, served as Governor-General of India from 1921 to 1926. His tenure was marked by efforts to address political and social challenges facing British India in the aftermath of World War I. Isaacs focused on promoting reconciliation and cooperation between different religious and ethnic communities, seeking to foster unity and stability in the region. Additionally, he supported efforts to reform Indian society and improve living conditions for the rural poor, including measures to alleviate poverty and promote education. However, Isaacs' administration also faced criticism and opposition from various quarters, as nationalist sentiments continued to grow and demands for self-governance intensified.",
                "tags": ["Reconciliation", "Social Reform", "Nationalist Sentiments", "Self-Governance", "Spectrum Chapter 5"]
            },
            {
                "date": "1926-1931",
                "event": "Governor-Generalship of Edward Wood (Earl of Halifax)",
                "details": "Edward Wood, also known as the Earl of Halifax, served as Governor-General of India from 1926 to 1931. His tenure coincided with a period of significant political and constitutional developments in British India. Halifax oversaw the implementation of the Government of India Act of 1935, which introduced provincial autonomy and expanded Indian representation in legislative councils. Additionally, he faced challenges such as the Great Depression and growing nationalist movements, which posed serious economic and political challenges to British rule. Halifax pursued policies of conciliation and reform, seeking to address Indian grievances and promote stability in the region.",
                "tags": ["Government of India Act of 1935", "Great Depression", "Nationalist Movements", "Conciliation", "Spectrum Chapter 5"]
            },
            {
                "date": "1931-1936",
                "event": "Governor-Generalship of Freeman Freeman-Thomas (Marquess of Willingdon)",
                "details": "Freeman Freeman-Thomas, also known as the Marquess of Willingdon, served as Governor-General of India from 1931 to 1936. His tenure was marked by efforts to address social and economic challenges facing British India amidst the global economic downturn of the 1930s. Willingdon focused on promoting economic development and welfare programs, including initiatives to alleviate poverty and improve healthcare and education. Additionally, he faced growing nationalist sentiments and demands for self-governance, especially in the wake of the Round Table Conferences and the civil disobedience movement led by Mahatma Gandhi. Willingdon sought to maintain British authority and stability in the face of mounting pressure for political reforms.",
                "tags": ["Economic Development", "Welfare Programs", "Nationalist Sentiments", "Round Table Conferences", "Spectrum Chapter 5"]
            },
            {
                "date": "1936-1943",
                "event": "Governor-Generalship of Victor Hope (Marquess of Linlithgow)",
                "details": "Victor Hope, also known as the Marquess of Linlithgow, served as Governor-General of India from 1936 to 1943. His tenure was marked by challenges and controversies, including the outbreak of World War II and the Quit India Movement of 1942. Linlithgow faced the daunting task of managing wartime conditions in India and balancing British interests with Indian aspirations for self-governance. His decision to involve India in the war effort without consulting Indian leaders led to widespread discontent and protests, culminating in the Quit India Movement, which called for the immediate withdrawal of British rule. Despite these challenges, Linlithgow remained committed to maintaining British control over India, resisting calls for significant political concessions or reforms.",
                "tags": ["World War II", "Quit India Movement", "British Control", "Political Concessions", "Spectrum Chapter 5"]
            },
            {
                "date": "1943-1947",
                "event": "Governor-Generalship of Archibald Wavell (Earl Wavell)",
                "details": "Archibald Wavell, also known as the Earl Wavell, served as Governor-General of India from 1943 to 1947. His tenure was marked by the final years of British colonial rule in India and the tumultuous events leading up to independence. Wavell faced the formidable challenge of managing political unrest and communal tensions amidst the backdrop of World War II. He sought to navigate delicate political negotiations and maintain stability in the face of mounting demands for independence from Indian nationalist leaders. However, Wavell's efforts were overshadowed by the escalating violence and partition of India in 1947, which led to the creation of independent India and Pakistan.",
                "tags": ["Independence Movement", "Partition of India", "Communal Tensions", "World War II", "Spectrum Chapter 5"]
            }
        ]
  
  
  const nawabOfBengalTimeline = [
      {
          "date": "1733",
          "event": "Birth of Siraj ud-Daulah",
          "details": "Siraj ud-Daulah was born in 1733 in Murshidabad, Bengal. He was the grandson of the Nawab of Bengal, Alivardi Khan. His birth brought him into a line of succession that was influential in the politics of Bengal.",
          "tags": ["Siraj ud-Daulah", "Nawab of Bengal", "Birth"]
      },
      {
          "date": "1756",
          "event": "Siraj ud-Daulah ascends to the throne of Bengal",
          "details": "Following the death of his grandfather Alivardi Khan, Siraj ud-Daulah became the Nawab of Bengal in April 1756. His ascension occurred amidst widespread intrigue and rivalry in the court.",
          "tags": ["Siraj ud-Daulah", "Nawab of Bengal", "Political Change"]
      },
      {
          "date": "1756",
          "event": "Capture of Kolkata by Siraj ud-Daulah",
          "details": "In 05-1756, Siraj ud-Daulah captured Kolkata, then under the control of the British East India Company, due to their expansion and fortification activities which he saw as a threat to his sovereignty.",
          "tags": ["Siraj ud-Daulah", "Kolkata", "Military Conflict"]
      },
      {
          "date": "1757",
          "event": "The Black Hole of Calcutta",
          "details": "Following the capture of Kolkata, a tragic incident occurred where a large number of British prisoners of war were held in a small dungeon overnight, leading to numerous deaths due to suffocation.",
          "tags": ["Kolkata", "Disaster", "British East India Company"]
      },
      {
          "date": "1757",
          "event": "Recovery of Kolkata by Robert Clive",
          "details": "In January 1757, Robert Clive led British forces to recapture Kolkata. Clive’s strategic military actions were pivotal in regaining control and strengthening British positions in Bengal.",
          "tags": ["Robert Clive", "Kolkata", "Military Conflict"]
      },
      {
          "date": "1757",
          "event": "Battle of Plassey",
          "details": "On June 23, 1757, the Battle of Plassey was fought between the British East India Company, led by Robert Clive, and the Nawab Siraj ud-Daulah. The battle was marked by betrayal from Siraj’s commander Mir Jafar and ended in a decisive British victory.",
          "tags": ["Siraj ud-Daulah", "Robert Clive", "Military Conflict"]
      },
      {
          "date": "1757",
          "event": "Death of Siraj ud-Daulah",
          "details": "After his defeat at the Battle of Plassey, Siraj ud-Daulah was captured and executed by Mohammad Ali Beg under the orders of Mir Jafar, who had conspired with the British to overthrow him.",
          "tags": ["Siraj ud-Daulah", "Nawab of Bengal", "Death"]
      }
  ]
  const chapterOneTimeline = [
    {
      "date": "1498",
      "event": "Discovery of Sea Route to India by Vasco Da Gama",
      "details": "Vasco Da Gama, a Portuguese explorer, discovered the sea route to India, landing at Calicut on the Malabar Coast.",
      "tags": ["Spectrum Chapter 1","Vasco Da Gama", "Portuguese Empire", "Exploration"]
    },
    {
      "date": "1502",
      "event": "Vasco Da Gama's Second Visit to India",
      "details": "During his second visit, Vasco Da Gama established trading stations at Calicut, Cochin, and Cannanore, marking the beginning of Portuguese influence in India.",
      "tags": ["Spectrum Chapter 1","Vasco Da Gama", "Portuguese Empire", "Trade"]
    },
    {
      "date": "1505-1509",
      "event": "Governorship of Francisco de Almeida",
      "details": "Francisco de Almeida, the first Viceroy of Portuguese India, sought to dominate the Indian Ocean trade routes.  He implemented the Blue Water Policy, relying on naval supremacy rather than land-based forts. Enforcing this with the Cartaze licensing system, the Portuguese aimed to control sea trade. This strategy brought initial success, disrupting existing trade networks and giving the Portuguese a strong foothold. However, the challenges of policing a vast ocean and facing rising European rivals ultimately led to a shift in Portuguese strategy.",
      "tags": ["Spectrum Chapter 1","Francisco de Almeida", "Portuguese Empire", "Governance"]
    },
    {
      "date": "1509-1515",
      "event": "Alfonso de Albuquerque's Contributions",
      "details": "Alfonso de Albuquerque, the second governor of Portuguese India, is  renowned for building the foundations of Portugal's empire in the East.  He conquered Goa, making it the center of Portuguese power, and captured strategic ports like Malacca.  Albuquerque's victories in naval battles against Arab and Egyptian fleets cemented Portuguese dominance in the Indian Ocean. Beyond conquest, he initiated administrative reforms and encouraged intermarriages between Portuguese and locals to create a loyal population. His legacy is marked by strategic conquests, naval power, and a vision for a lasting Portuguese presence in India.",
      "tags": ["Spectrum Chapter 1","Alfonso de Albuquerque", "Portuguese Empire", "Military Conflict"]
    },
    {
      "date": "1529-1538",
      "event": "Governorship of Nino da Cunha",
      "details": "Nino da Cunha shifted the capital from Cochin to Goa and brought Diu and Bassein under Portuguese control.",
      "tags": ["Spectrum Chapter 1","Nino da Cunha", "Portuguese Empire", "Administrative Change"]
    },
    {
      "date": "1600",
      "event": "Formation of the English East India Company",
      "details": "The English East India Company was established by a charter from Queen Elizabeth I, granting a monopoly on trade in the East Indies.",
      "tags": ["Spectrum Chapter 1","English East India Company", "British Empire", "Trade"]
    },
    {
      "date": "1612",
      "event": "Establishment of the First English Factory at Surat",
      "details": "Captain Thomas Best defeated the Portuguese, leading to the establishment of the first English factory at Surat.",
      "tags": ["Spectrum Chapter 1","English East India Company", "Surat", "Military Conflict"]
    },
    {
      "date": "1639",
      "event": "Foundation of Madras",
      "details": "The English obtained permission from the Chandragiri chief to establish Fort St. George, marking the foundation of Madras.",
      "tags": ["Spectrum Chapter 1","English East India Company", "Madras", "Administrative Change"]
    },
    {
      "date": "1664",
      "event": "Foundation of the French East India Company",
      "details": "Colbert, minister of Louis XIV, founded the French East India Company to compete with English and Dutch traders.",
      "tags": ["Spectrum Chapter 1","French East India Company", "French Empire", "Trade"]
    },
    {
      "date": "1740-1748",
      "event": "First Carnatic War",
      "details": "The First Carnatic War, part of the broader Anglo-French rivalry, was fought in India, reflecting the conflict between these European powers in Europe.",
      "tags": ["Spectrum Chapter 1","Carnatic Wars", "Military Conflict", "Anglo-French Rivalry"]
    },
    {
      "date": "1749-1754",
      "event": "Second Carnatic War",
      "details": "The Second Carnatic War was fought between the British and the French in the Carnatic region of South India.",
      "tags": ["Spectrum Chapter 1","Carnatic Wars", "Military Conflict", "Anglo-French Rivalry"]
    },
    {
      "date": "1758-1763",
      "event": "Third Carnatic War",
      "details": "The Third Carnatic War ended with the Treaty of Paris, limiting the French to using their settlements for commercial purposes only.",
      "tags": ["Spectrum Chapter 1","Carnatic Wars", "Military Conflict", "Anglo-French Rivalry"]
    }
]
const chapterFiveTimeline = [

  {
      "date": "1783",
      "event": "Peace of Paris",
      "details": "Marking a transition in the British Empire's focus from the 'first empire' in America and the West Indies to the 'second empire' targeting regions in Asia and Africa.",
      "tags": [ "British Empire", "Peace of Paris", "Imperial Transition", "Spectrum Chapter 5"]
  },
  {
      "date": "1798-1818",
      "event": "Extension of British dominion in India",
      "details": "British utilized the subsidiary alliance system as a defense against France and Russia, with Lord Hastings treating India as conquered territory.",
      "tags": [ "British Empire", "Subsidiary Alliance", "India", "Spectrum Chapter 5"]
  },
  {
      "date": "1740",
      "event": "Start of Anglo-French struggle in India",
      "details": "The conflict began in the context of the War of Austrian Succession in Europe, marking a significant period in the British dominion in India.",
      "tags": [ "Anglo-French Struggle", "War of Austrian Succession", "British Period", "Spectrum Chapter 5"]
  },
  {
      "date": "1757",
      "event": "Battle of Plassey",
      "details": "The British, led by Robert Clive, defeated the Nawab of Bengal, marking a crucial victory and strengthening British control in India.",
      "tags": [ "Battle of Plassey", "Robert Clive", "Bengal", "Spectrum Chapter 5"]
  },
  {
      "date": "1761",
      "event": "Third Battle of Panipat",
      "details": "The Marathas were defeated by Ahmad Shah Abdali, which influenced the dynamics of power in the Indian subcontinent significantly.",
      "tags": [ "Third Battle of Panipat", "Marathas", "Ahmad Shah Abdali", "Spectrum Chapter 5"]
  },
  {
      "date": "1630s",
      "event": "Establishment of British factories in Bengal",
      "details": "British East India Company set up factories in various locations including Balasore and Hooghly, marking the beginning of deeper economic interests in Bengal.",
      "tags": [ "British East India Company", "Bengal", "Trade", "Spectrum Chapter 5"]
  },
  {
      "date": "1690s",
      "event": "Foundation of Calcutta",
      "details": "The English Company laid the foundation for what would become one of the major cities in British India, facilitating trade and administration.",
      "tags": [ "Calcutta", "British Empire", "Trade", "Spectrum Chapter 5"]
  },
  {
      "date": "1700-1727",
      "event": "Rule of Murshid Quli Khan in Bengal",
      "details": "Murshid Quli Khan served as the Dewan of Bengal, overseeing a period of prosperity and significant governance until his death.",
      "tags": [ "Murshid Quli Khan", "Bengal", "Governance", "Spectrum Chapter 5"]
  },
  {
      "date": "1739-1740",
      "event": "Rule of Sarfaraz Khan in Bengal",
      "details": "Sarfaraz Khan ruled briefly after succeeding Shujauddin, was deemed incapable, and was killed by Alivardi Khan.",
      "tags": [ "Sarfaraz Khan", "Bengal", "Governance", "Spectrum Chapter 5"]
  },
  {
      "date": "1741",
      "event": "Rise of Alivardi Khan",
      "details": "Alivardi Khan became the Deputy Governor of Bengal, beginning his rule which lasted until 1756 and was marked by economic growth and military challenges.",
      "tags": [ "Alivardi Khan", "Bengal", "Governance", "Spectrum Chapter 5"]
  },
  {
      "date": "04-1756",
      "event": "Death of Alivardi Khan",
      "details": "Alivardi Khan passed away, leading to the succession of his grandson, Siraj-ud-Daulah, as the Nawab of Bengal.",
      "tags": [ "Alivardi Khan", "Siraj-ud-Daulah", "Bengal", "Spectrum Chapter 5"]
  },
  {
      "date": "06-23-1757",
      "event": "Battle of Plassey",
      "details": "Siraj-ud-Daulah's forces were defeated by Robert Clive's much smaller force, largely due to internal betrayal among Siraj's officials.",
      "tags": [ "Battle of Plassey", "Siraj-ud-Daulah", "Robert Clive", "Spectrum Chapter 5"]
  },
  {
      "date": "11-1759",
      "event": "Defeat of the Dutch at Bedara",
      "details": "The English forces defeated the Dutch at Bedara, reinforcing British dominance and causing frustration to Mir Jafar.",
      "tags": [ "Dutch", "Bedara", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1760",
      "event": "Treaty between Mir Kasim and the Company",
      "details": "Mir Kasim agreed to cede districts of Burdwan, Midnapur, and Chittagong to the Company, marking a significant treaty in the colonial administration of Bengal.",
      "tags": [ "Mir Kasim", "British East India Company", "Treaty of 1760", "Spectrum Chapter 5"]
  },
  {
      "date": "1763",
      "event": "Wars between the English and Mir Kasim",
      "details": "Conflicts over transit duties escalated into full-scale wars, resulting in English victories at Katwah, Murshidabad, Giria, Sooty, and Munger.",
      "tags": [ "Mir Kasim", "British East India Company", "Bengal", "Spectrum Chapter 5"]
  },
  {
      "date": "10-22-1764",
      "event": "Battle of Buxar",
      "details": "The combined forces of Mir Kasim, the Nawab of Awadh, and Shah Alam II were defeated by the British under Major Hector Munro. This victory cemented English power in northern India.",
      "tags": [ "Battle of Buxar", "British Empire", "Mir Kasim", "Spectrum Chapter 5"]
  },
  {
      "date": "08-1765",
      "event": "Treaty of Allahabad",
      "details": "Robert Clive negotiated treaties with the Nawab of Awadh and the Mughal Emperor Shah Alam II at Allahabad. These treaties solidified British control in northern India and legalized their political gains in Bengal.",
      "tags": [ "Treaty of Allahabad", "Robert Clive", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1757-1760",
      "event": "First Governorship of Robert Clive in Bengal",
      "details": "Robert Clive served as Governor of Bengal, laying down the administrative and military foundation of British power in the region.",
      "tags": [ "Robert Clive", "Governor of Bengal", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1765-1767",
      "event": "Second Governorship of Robert Clive in Bengal",
      "details": "During his second term as Governor, Clive implemented the dual government system in Bengal, leading to administrative challenges.",
      "tags": [ "Robert Clive", "Governor of Bengal", "Dual Government", "Spectrum Chapter 5"]
  },
  {
      "date": "1774",
      "event": "Death of Robert Clive",
      "details": "Robert Clive, key figure in establishing British dominance in India, died allegedly by suicide after returning to England.",
      "tags": [ "Robert Clive", "British Empire", "Death", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1777",
      "event": "Death of Mir Kasim",
      "details": "Mir Kasim, the ousted Nawab of Bengal, died in poverty and obscurity, ending his troubled life far from power.",
      "tags": [ "Mir Kasim", "Nawab of Bengal", "Death", "Spectrum Chapter 5"]
  },
  {
      "date": "1765-1772",
      "event": "Dual Government in Bengal",
      "details": "Introduced by Robert Clive after the Battle of Buxar, this system led to severe administrative dysfunction, eventually abolished by Warren Hastings in 1772.",
      "tags": [ "Dual Government", "Bengal", "Robert Clive", "Spectrum Chapter 5"]
  },
  {
      "date": "1734-1766",
      "event": "Rule of Chikka Krishnaraja Wodeyar II",
      "details": "His reign saw the diminishment of royal power, with Haidar Ali and others rising to prominence in Mysore.",
      "tags": [ "Chikka Krishnaraja Wodeyar II", "Mysore", "Governance", "Spectrum Chapter 5"]
  },
  {
      "date": "1761",
      "event": "Rise of Haidar Ali in Mysore",
      "details": "Haidar Ali became the de facto ruler of Mysore, transforming it into a formidable military power in southern India.",
      "tags": [ "Haidar Ali", "Mysore", "Military Leadership", "Spectrum Chapter 5"]
  },
  {
      "date": "1761-1763",
      "event": "Military Campaigns of Haidar Ali",
      "details": "Haidar Ali captured several regions including Dod Ballapur, Sera, Bednur, and Hoskote, and subdued the Poligars of South India.",
      "tags": [ "Haidar Ali", "Military Campaigns", "South India", "Spectrum Chapter 5"]
  },
  {
      "date": "1764, 1766, 1771",
      "event": "Maratha Conflicts with Haidar Ali",
      "details": "Haidar Ali faced multiple defeats against the Marathas under Madhavrao and had to pay them large sums to maintain peace.",
      "tags": [ "Haidar Ali", "Marathas", "Madhavrao", "Spectrum Chapter 5"]
  },
  {
      "date": "04-04-1769",
      "event": "Treaty of Madras",
      "details": "Following a surprise appearance at Madras by Haidar Ali, the English were forced to sign a treaty promising mutual restitution and assistance against further attacks.",
      "tags": [ "Treaty of Madras", "Haidar Ali", "Madras", "Spectrum Chapter 5"]
  },
  {
      "date": "1767-1769",
      "event": "First Anglo-Mysore War",
      "details": "The war began due to territorial disputes and British confidence after successes in Bengal. It ended with the Treaty of Madras.",
      "tags": [ "First Anglo-Mysore War", "Haidar Ali", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1780-1784",
      "event": "Second Anglo-Mysore War",
      "details": "This conflict arose from the English breaching the Treaty of Madras and not supporting Haidar Ali against Maratha attacks.",
      "tags": [ "Second Anglo-Mysore War", "Haidar Ali", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "11-1781",
      "event": "Battle of Porto Novo",
      "details": "Haidar Ali suffered a significant defeat against the British under Sir Eyre Coote.",
      "tags": [ "Battle of Porto Novo", "Haidar Ali", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "12-7-1782",
      "event": "Death of Haidar Ali",
      "details": "Haidar Ali died of cancer, leaving the leadership of Mysore to his son, Tipu Sultan.",
      "tags": [ "Haidar Ali", "Death", "Mysore", "Spectrum Chapter 5"]
  },
  {
      "date": "03-1784",
      "event": "Treaty of Mangalore",
      "details": "Concluding the Second Anglo-Mysore War, this treaty was negotiated between Tipu Sultan and the British, ending inconclusive hostilities.",
      "tags": [ "Treaty of Mangalore", "Tipu Sultan", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "04-1790",
      "event": "Declaration of War against Travancore",
      "details": "Tipu Sultan declared war on Travancore, citing violations of his sovereign rights after Travancore purchased territories from the Dutch.",
      "tags": [ "Tipu Sultan", "Travancore", "War Declaration", "Spectrum Chapter 5"]
  },
  {
      "date": "03-1791",
      "event": "Capture of Bangalore",
      "details": "Led by Cornwallis, the English forces captured Bangalore during their march to Seringapatam in the Third Anglo-Mysore War.",
      "tags": [ "Third Anglo-Mysore War", "Bangalore", "Cornwallis", "Spectrum Chapter 5"]
  },
  {
      "date": "1792",
      "event": "Treaty of Seringapatam",
      "details": "Under this treaty, Mysore lost significant territories including Baramahal, Dindigul, and Malabar to the British, and regions around Tungabhadra to the Marathas. Tipu Sultan had to pay a heavy tribute and gave his two sons as hostages to secure peace.",
      "tags": [ "Treaty of Seringapatam", "Tipu Sultan", "British Empire", "Marathas", "Spectrum Chapter 5"]
  },
  {
      "date": "1796",
      "event": "Death of Wodeyar ruler and Tipu's naval initiatives",
      "details": "Following the death of the Wodeyar ruler, Tipu declared himself sultan and refused to place the minor son on the throne. He also enhanced his military by planning a naval fleet and establishing three dockyards.",
      "tags": [ "Tipu Sultan", "Wodeyar Dynasty", "Naval Military", "Spectrum Chapter 5"]
  },
  {
      "date": "1798",
      "event": "Lord Wellesley's governorship and concerns over Tipu's alliances",
      "details": "Lord Wellesley became the Governor General of India, focusing on the perceived threat from Tipu Sultan's ties with the French, leading to the Fourth Anglo-Mysore War.",
      "tags": [ "Lord Wellesley", "Tipu Sultan", "French Alliance", "Spectrum Chapter 5"]
  },
  {
      "date": "1799",
      "event": "Fourth Anglo-Mysore War",
      "details": "The war ended with the fall of Seringapatam, where Tipu Sultan was defeated by General Harris and Arthur Wellesley, marking a significant British victory in India.",
      "tags": [ "Fourth Anglo-Mysore War", "Tipu Sultan", "Seringapatam", "Spectrum Chapter 5"]
  },
  {
      "date": "1797",
      "event": "Establishment of Jacobin Club at Seringapatam",
      "details": "Tipu Sultan supported the establishment of a Jacobin Club in Seringapatam, showcasing his affinity with revolutionary ideals and aligning with the French during the late 18th century.",
      "tags": [ "Jacobin Club", "Tipu Sultan", "French Alliance", "Spectrum Chapter 5"]
  },
  {
      "date": "1791",
      "event": "Maratha raid on Sringeri Temple",
      "details": "During a Maratha raid, the idol of Goddess Sarada at the Sringeri Temple was damaged. Tipu Sultan later sanctioned funds for its repair and the reinstallation of the idol.",
      "tags": [ "Maratha Raid", "Sringeri Temple", "Tipu Sultan", "Spectrum Chapter 5"]
  },
  {
      "date": "1831",
      "event": "William Bentinck's control of Mysore",
      "details": "Due to allegations of misgovernance, William Bentinck took control of Mysore from the Wodeyar dynasty.",
      "tags": [ "William Bentinck", "Mysore", "Governance", "Spectrum Chapter 5"]
  },
  {
      "date": "1881",
      "event": "Restoration of the Kingdom of Mysore",
      "details": "Lord Ripon restored the state of Mysore to its ruler, marking a significant administrative change in the region under British rule.",
      "tags": [ "Lord Ripon", "Mysore", "Restoration", "Spectrum Chapter 5"]
  },
  {
      "date": "1720-1740",
      "event": "Reign of Bajirao I",
      "details": "Bajirao I led the Maratha confederacy, significantly expanding its influence in North India.",
      "tags": [ "Bajirao I", "Maratha Confederacy", "Leadership", "Spectrum Chapter 5"]
  },
  {
      "date": "1761",
      "event": "Third Battle of Panipat",
      "details": "A crucial conflict where the Marathas were defeated by Ahmad Shah Abdali, impacting their political strength significantly.",
      "tags": [ "Third Battle of Panipat", "Marathas", "Ahmad Shah Abdali", "Spectrum Chapter 5"]
  },
  {
      "date": "1772",
      "event": "Death of Madhavrao I",
      "details": "The death of Madhavrao I led to a decline in central control over the Maratha confederacy, affecting its stability.",
      "tags": [ "Madhavrao I", "Maratha Confederacy", "Death", "Spectrum Chapter 5"]
  },
  {
      "date": "1775-1782",
      "event": "First Anglo-Maratha War",
      "details": "This conflict arose after the assassination of Narayanrao, with subsequent Maratha political instability exploited by the British.",
      "tags": [ "First Anglo-Maratha War", "Maratha Confederacy", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1775",
      "event": "Treaty of Surat",
      "details": "Signed by Raghunathrao with the British, ceding territories and revenue for military support against his rivals within the Maratha confederacy.",
      "tags": [ "Treaty of Surat", "Raghunathrao", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1776",
      "event": "Treaty of Purandhar",
      "details": "Colonel Upton annulled the Treaty of Surat and negotiated this treaty, altering the terms of British support to the Marathas.",
      "tags": [ "Treaty of Purandhar", "Marathas", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1777",
      "event": "Violation of Treaty by Nana Phadnavis",
      "details": "Nana Phadnavis granted the French a port on the west coast, violating an agreement with the Calcutta Council and prompting English military action towards Pune.",
      "tags": [ "Nana Phadnavis", "French Alliance", "British Conflict", "Spectrum Chapter 5"]
  },
  {
      "date": "01-1779",
      "event": "Treaty of Wadgaon",
      "details": "The English army, having been cut off from supplies and surrounded by Marathas, surrendered and signed this treaty, which reversed their territorial gains since 1775.",
      "tags": [ "Treaty of Wadgaon", "Marathas", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1779",
      "event": "Capture of Ahmedabad and Bassein",
      "details": "Colonel Goddard captured Ahmedabad in 02-1779 and Bassein in December 1780, advancing British interests during the Anglo-Maratha conflicts.",
      "tags": [ "Anglo-Maratha War", "British Empire", "Ahmedabad", "Bassein", "Spectrum Chapter 5"]
  },
  {
      "date": "08-1780",
      "event": "Capture of Gwalior",
      "details": "Captain Popham led a detachment that captured Gwalior from the Marathas, marking a significant British military achievement.",
      "tags": [ "Capture of Gwalior", "British Empire", "Marathas", "Spectrum Chapter 5"]
  },
  {
      "date": "02-1781",
      "event": "Battle of Sipri",
      "details": "The English under General Camac defeated Sindhia at Sipri, an important victory that contributed to the negotiation of the Treaty of Salbai.",
      "tags": [ "Battle of Sipri", "British Empire", "Sindhia", "Spectrum Chapter 5"]
  },
  {
      "date": "1782-1783",
      "event": "Treaty of Salbai",
      "details": "This treaty ended the First Anglo-Maratha War, securing peace for twenty years and restoring Maratha territories taken since 1776.",
      "tags": [ "Treaty of Salbai", "First Anglo-Maratha War", "Peace Agreement", "Spectrum Chapter 5"]
  },
  {
      "date": "1801",
      "event": "Murder of Vithuji Holkar",
      "details": "The Peshwa Bajirao II murdered Vithuji, brother of Jaswantrao Holkar, escalating conflicts within the Maratha confederacy.",
      "tags": [ "Bajirao II", "Maratha Confederacy", "Internal Conflict", "Spectrum Chapter 5"]
  },
  {
      "date": "10-25-1802",
      "event": "Battle of Hadapsar",
      "details": "Jaswant Holkar decisively defeated the armies of the Peshwa and Scindia, leading to significant changes in the Maratha leadership.",
      "tags": [ "Battle of Hadapsar", "Maratha Confederacy", "Leadership Change", "Spectrum Chapter 5"]
  },
  {
      "date": "12-31-1802",
      "event": "Treaty of Bassein",
      "details": "The Peshwa Bajirao II signed the Treaty of Bassein with the English, agreeing to host a sizable contingent of Company troops, significantly enhancing British control over the Maratha confederacy.",
      "tags": [ "Treaty of Bassein", "Peshwa Bajirao II", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "12-17-1803",
      "event": "Treaty of Deogaon",
      "details": "After the defeat of Bhonsle, this treaty was one of the subsidiary treaties signed during the Second Anglo-Maratha War, confirming British influence over Maratha territories.",
      "tags": [ "Treaty of Deogaon", "Bhonsle", "Second Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "12-30-1803",
      "event": "Treaty of Surji-Anjangaon",
      "details": "Following his defeat, Scindia signed this treaty with the British, resulting in significant territorial concessions and the imposition of a subsidiary alliance.",
      "tags": [ "Treaty of Surji-Anjangaon", "Scindia", "Second Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "1806",
      "event": "Treaty of Rajpurghat",
      "details": "Concluded the engagements with Holkar during the Second Anglo-Maratha War, marking the end of significant military resistance by the Marathas.",
      "tags": [ "Treaty of Rajpurghat", "Holkar", "Second Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "1817-1819",
      "event": "Third Anglo-Maratha War",
      "details": "The Maratha confederacy attempted to resist British expansion but was decisively defeated in a series of battles and subsequent treaties.",
      "tags": [ "Third Anglo-Maratha War", "Maratha Confederacy", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1817",
      "event": "Treaty of Poona",
      "details": "Signed with the Peshwa during the Third Anglo-Maratha War, this treaty aimed to formalize British supremacy and control.",
      "tags": [ "Treaty of Poona", "Peshwa", "Third Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "11-1817",
      "event": "Treaty of Gwalior",
      "details": "This treaty with Scindia was part of the efforts to pacify and control the Maratha leaders during the Third Anglo-Maratha War.",
      "tags": [ "Treaty of Gwalior", "Scindia", "Third Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "01-1818",
      "event": "Treaty of Mandasor",
      "details": "Signed with Holkar, this treaty further weakened the Maratha power and solidified British authority in the region.",
      "tags": [ "Treaty of Mandasor", "Holkar", "Third Anglo-Maratha War", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1818",
      "event": "Surrender of the Peshwa",
      "details": "Marking the end of significant resistance, the Peshwa surrendered to the British, effectively dissolving the Maratha confederacy's power.",
      "tags": [ "Peshwa Surrender", "Third Anglo-Maratha War", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1775",
      "event": "Closure of English Factory by Sarfraz Khan",
      "details": "Sarfraz Khan forced the closure of an English factory in Sindh, indicating rising tensions between local rulers and the British during this period.",
      "tags": [ "Sarfraz Khan", "Sindh", "British Factory", "Spectrum Chapter 5"]
  },
  {
      "date": "1783",
      "event": "Talpuras Establish Control over Sindh",
      "details": "Under Mir Fath Ali Khan, the Talpuras ousted the Kallora rulers and established their dominion over Sindh, confirmed by the Durrani monarch.",
      "tags": [ "Talpuras", "Sindh", "Mir Fath Ali Khan", "Spectrum Chapter 5"]
  },
  {
      "date": "1800",
      "event": "Division of Sindh Among Char Yar",
      "details": "After the death of Mir Fath Ali Khan, the Char Yar (his brothers) divided Sindh amongst themselves and ruled as the Amirs of Sindh.",
      "tags": [ "Char Yar", "Sindh", "Amirs", "Spectrum Chapter 5"]
  },
  {
      "date": "10-1800",
      "event": "Expulsion of British Agent from Sindh",
      "details": "Influenced by Tipu Sultan and local anti-British sentiments, the Amirs ordered a British agent to leave Sindh, marking a low in Anglo-Sindh relations.",
      "tags": [ "British Expulsion", "Sindh", "Tipu Sultan", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1807",
      "event": "Treaty of ‘Eternal Friendship’",
      "details": "This treaty marked the first formal agreement between the British and the Amirs of Sindh, pledging mutual exclusion of the French and establishing diplomatic exchanges.",
      "tags": [ "Treaty of Eternal Friendship", "Sindh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1820",
      "event": "Renewal of the Treaty of Eternal Friendship",
      "details": "The treaty was renewed to include terms that also excluded American involvement in Sindh and resolved some border disputes following the Maratha defeat in 1818.",
      "tags": [ "Treaty Renewal", "Sindh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1832",
      "event": "Treaty of 1832",
      "details": "Further solidified British influence in Sindh by reconfirming old treaties and addressing new regional security concerns.",
      "tags": [ "Treaty of 1832", "Sindh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1838",
      "event": "Strategic Treaty with the Amirs",
      "details": "Amirs of Sindh reluctantly agreed to sign a treaty that allowed British intervention in local disputes and strengthened British strategic interests in the region against possible external threats.",
      "tags": [ "Treaty of 1838", "Sindh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1838",
      "event": "Establishment of British Protectorate over Sindh",
      "details": "In 1838, Sindh was effectively turned into a British protectorate following the establishment of a British resident with the authority to move freely with military escort, marking a significant increase in British control in the region.",
      "tags": [ "Sindh", "British Protectorate", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1838",
      "event": "Tripartite Treaty of 1838",
      "details": "The British, seeking to address the 'Afghan problem', signed a tripartite treaty with Ranjit Singh to align their military objectives in the region.",
      "tags": [ "Tripartite Treaty of 1838", "Ranjit Singh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "02-1839",
      "event": "Sindh Accepts Subsidiary Alliance",
      "details": "The Amirs of Sindh were compelled under threat to accept a subsidiary alliance with the British, agreeing to host British troops and pay for their maintenance, fundamentally altering the sovereignty of Sindh.",
      "tags": [ "Subsidiary Alliance", "Sindh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1843",
      "event": "Conquest of Sindh",
      "details": "Sindh was formally annexed to the British Empire, with Charles Napier becoming its first governor, after a period of increasing British military presence and economic demands on the region.",
      "tags": [ "Conquest of Sindh", "British Empire", "Charles Napier", "Spectrum Chapter 5"]
  },
  {
      "date": "1715-1716",
      "event": "Capture and Death of Banda Bahadur",
      "details": "Banda Bahadur, a Sikh leader, was defeated by the Mughal emperor Farrukhsiyar in 1715 and executed in 1716, impacting the Sikh resistance against the Mughals.",
      "tags": [ "Banda Bahadur", "Sikh History", "Mughal Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1721",
      "event": "Reunification of Sikh Factions",
      "details": "The rift between Bandai and Tat Khalsa Sikh factions ended under the influence of Bhai Mani Singh in 1721, leading to a more unified Sikh community.",
      "tags": [ "Sikh Reunification", "Bandai", "Tat Khalsa", "Spectrum Chapter 5"]
  },
  {
      "date": "1784",
      "event": "Formation of Dal Khalsa",
      "details": "Kapur Singh Faizullapuria organized the Sikhs under Dal Khalsa, aiming to unite the Sikh community politically, culturally, and economically.",
      "tags": [ "Dal Khalsa", "Sikh Unity", "Kapur Singh Faizullapuria", "Spectrum Chapter 5"]
  },
  {
      "date": "1763-1773",
      "event": "Sikh Misl Consolidation",
      "details": "During this decade, various Sikh misls (military brotherhoods) solidified their control over the Punjab region, marking a significant period of Sikh political and military organization.",
      "tags": [ "Sikh Misls", "Punjab", "Sikh State", "Spectrum Chapter 5"]
  },
  {
      "date": "11-2-1780",
      "event": "Birth of Ranjit Singh",
      "details": "At the time of Ranjit Singh's birth, Punjab was divided among various misls, setting the stage for his future unification and leadership of the region.",
      "tags": [ "Ranjit Singh", "Sikh Misls", "Punjab", "Spectrum Chapter 5"]
  },
  {
      "date": "1799",
      "event": "Ranjit Singh becomes Governor of Lahore",
      "details": "Appointed by Zaman Shah, the ruler of Afghanistan, marking the start of his consolidation of power in Punjab.",
      "tags": [ "Ranjit Singh", "Lahore", "Governorship", "Spectrum Chapter 5"]
  },
  {
      "date": "1805",
      "event": "Acquisition of Jammu and Amritsar by Ranjit Singh",
      "details": "Ranjit Singh expanded his territory to include Jammu and the religious capital Amritsar, consolidating his power in Punjab.",
      "tags": [ "Ranjit Singh", "Jammu", "Amritsar", "Spectrum Chapter 5"]
  },
  {
      "date": "04-25-1809",
      "event": "Treaty of Amritsar",
      "details": "Ranjit Singh agreed to the Sutlej River as the boundary between his territories and those of the British East India Company, focusing his expansion efforts westward.",
      "tags": [ "Treaty of Amritsar", "Ranjit Singh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "06-1839",
      "event": "Death of Ranjit Singh",
      "details": "His death led to a period of political instability and the eventual decline of the Sikh Empire.",
      "tags": [ "Ranjit Singh", "Death", "Sikh Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1839",
      "event": "Deaths of Kharak Singh and Nau Nihal Singh",
      "details": "Successive deaths of Ranjit Singh's successors led to severe political turmoil and factional disputes in Punjab.",
      "tags": [ "Kharak Singh", "Nau Nihal Singh", "Sikh Turmoil", "Spectrum Chapter 5"]
  },
  {
      "date": "12-11-1845",
      "event": "Start of the First Anglo-Sikh War",
      "details": "Triggered by complex causes including political instability in Punjab and aggressive posturing by both the Sikh and British military forces.",
      "tags": [ "First Anglo-Sikh War", "British Empire", "Sikh Army", "Spectrum Chapter 5"]
  },
  {
      "date": "03-08-1846",
      "event": "Treaty of Lahore",
      "details": "Concluded the First Anglo-Sikh War with heavy penalties on the Sikhs including territorial concessions and indemnities.",
      "tags": [ "Treaty of Lahore", "First Anglo-Sikh War", "Sikh Concessions", "Spectrum Chapter 5"]
  },
  {
      "date": "03-16-1846",
      "event": "Transfer of Kashmir to Gulab Singh",
      "details": "Formalized by a separate treaty, this transfer was part of the aftermath of the Treaty of Lahore, involving payment and territorial adjustments involving Gulab Singh.",
      "tags": [ "Treaty of Lahore", "Kashmir", "Gulab Singh", "Spectrum Chapter 5"]
  },
  {
      "date": "12-1846",
      "event": "Treaty of Bhairowal",
      "details": "The treaty established a council of regency for Punjab, removing Rani Jindan as regent, and placing the region under closer British control.",
      "tags": [ "Treaty of Bhairowal", "Punjab", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1848-1849",
      "event": "Second Anglo-Sikh War",
      "details": "Triggered by discontent from the First Anglo-Sikh War's treaties, culminating in significant battles and the final annexation of Punjab by the British.",
      "tags": [ "Second Anglo-Sikh War", "Punjab", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "01-1849",
      "event": "Battle of Chillianwala",
      "details": "A major battle of the Second Anglo-Sikh War, noted for its fierce combat and high casualties on both sides.",
      "tags": [ "Battle of Chillianwala", "Second Anglo-Sikh War", "Sikh Army", "Spectrum Chapter 5"]
  },
  {
      "date": "02-21--1849",
      "event": "Battle of Gujarat",
      "details": "The decisive battle of the Second Anglo-Sikh War, leading to the surrender of the Sikh army at Rawalpindi and the final annexation of Punjab.",
      "tags": [ "Battle of Gujarat", "Second Anglo-Sikh War", "Annexation of Punjab", "Spectrum Chapter 5"]
  },
  {
      "date": "02-1787",
      "event": "Treaty with the Nawab of Carnatic",
      "details": "Marked the formalization of British expectations for subsidiary alliances, stipulating no foreign relations and defense provisions.",
      "tags": [ "Subsidiary Alliance", "Nawab of Carnatic", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1798",
      "event": "Subsidiary Alliance with the Nizam of Hyderabad",
      "details": "Initiated one of the first major subsidiary alliances under Lord Wellesley's strategy to expand British influence in India.",
      "tags": [ "Subsidiary Alliance", "Nizam of Hyderabad", "Lord Wellesley", "Spectrum Chapter 5"]
  },
  {
      "date": "1801",
      "event": "Subsidiary Alliance with the Nawab of Awadh",
      "details": "The Nawab of Awadh accepted a significant treaty under which the British pledged to defend Awadh in exchange for subsidy payments.",
      "tags": [ "Subsidiary Alliance", "Nawab of Awadh", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "12-1803",
      "event": "Subsidiary Alliance with the Bhonsle Raja of Berar",
      "details": "Part of Lord Wellesley's widespread application of subsidiary alliances across India, integrating Berar more closely under British influence.",
      "tags": [ "Subsidiary Alliance", "Bhonsle Raja of Berar", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "02-1804",
      "event": "Subsidiary Alliance with the Scindia",
      "details": "Extended the network of subsidiary alliances, securing British strategic interests further in the region.",
      "tags": [ "Subsidiary Alliance", "Scindia", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "02-1804",
      "event": "Subsidiary Alliance with Rajput States",
      "details": "Rajput states including Jodhpur, Jaipur, Macheri, and Bundi entered into subsidiary alliances with the British, agreeing to host British troops and underwriting their cost.",
      "tags": [ "Subsidiary Alliance", "Rajput States", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1818",
      "event": "Subsidiary Alliance with the Holkars",
      "details": "The Holkars, as the last of the Maratha confederation, accepted the Subsidiary Alliance, marking a significant milestone in the British consolidation of control over the Maratha territories.",
      "tags": [ "Subsidiary Alliance", "Holkars", "Maratha Confederacy", "Spectrum Chapter 5"]
  },
  {
      "date": "1819",
      "event": "Elevation of the Nawab of Awadh",
      "details": "The Nawab of Awadh was granted the title and status of a king by the British, a move part of broader strategies to manage and control Indian princely states under the colonial framework.",
      "tags": [ "Nawab of Awadh", "Title Grant", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1854",
      "event": "Outram's Report on Awadh",
      "details": "James Outram succeeded as the British resident in Awadh and submitted a report confirming the anarchical condition of the state, supporting his predecessor's observations and influencing British policy decisions.",
      "tags": [ "Outram", "Awadh", "British Administration", "Spectrum Chapter 5"]
  },
  {
      "date": "1856",
      "event": "Annexation of Awadh",
      "details": "Awadh was annexed by the British Empire, leading to the exile of Nawab Wajid Ali Shah to Calcutta. This act was one of the immediate triggers for the Revolt of 1857.",
      "tags": [ "Annexation of Awadh", "Nawab Wajid Ali Shah", "British Empire", "Spectrum Chapter 5"]
  },
  {
      "date": "1848",
      "event": "Annexation of Satara",
      "details": "Satara was annexed under the Doctrine of Lapse, an aggressive expansion policy applied by Lord Dalhousie during his tenure as governor general.",
      "tags": [ "Doctrine of Lapse", "Satara", "Lord Dalhousie", "Spectrum Chapter 5"]
  },
  {
      "date": "1854",
      "event": "Annexation of Jhansi and Nagpur",
      "details": "Both Jhansi and Nagpur were annexed by the British under the Doctrine of Lapse, reflecting the aggressive annexation strategies of Lord Dalhousie.",
      "tags": [ "Doctrine of Lapse", "Jhansi", "Nagpur", "Lord Dalhousie", "Spectrum Chapter 5"]
  },
{
  "date": "1826",
  "event": "Occupation of Assam and Anglo-Bhutanese Relations",
  "details": "The occupation of Assam in 1826 brought the British into close contact with Bhutan. Frequent raids by Bhutanese into Assam and Bengal led to conflicts and eventual British annexation of certain territories.",
  "tags": [ "British Empire", "Bhutan", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1863-1864",
  "event": "Treaty Imposed on Bhutan by British",
  "details": "Treaty imposed on Bhutan by the British, resulting in the surrender of passes leading to Assam by Bhutan. This event led to British annexation of these passes and cessation of allowances paid to Bhutan.",
  "tags": [ "British Empire", "Bhutan", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1865",
  "event": "Forced Surrender of Passes by Bhutan",
  "details": "Bhutan was forced to surrender passes to the British in return for an annual subsidy. The surrendered district became a productive area with the establishment of tea gardens.",
  "tags": [ "British Empire", "Bhutan", "Spectrum Chapter 5"]
},
{
  "date": "1801",
  "event": "Annexation of Gorakhpur by British",
  "details": "Annexation of Gorakhpur by the British, leading to conflict with Nepal.",
  "tags": [ "British Empire", "Nepal", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1813-1823",
  "event": "Capture of Butwal and Sheoraj by Gorkhas",
  "details": "Conflict between British and Gorkhas resulting from Gorkhas' capture of Butwal and Sheoraj during Lord Hastings' tenure.",
  "tags": [ "British Empire", "Nepal", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1816",
  "event": "Treaty of Sagauli",
  "details": "Treaty between British and Nepal, ending the war and favoring the British.",
  "tags": [ "British Empire", "Nepal", "Spectrum Chapter 5"]
},
{
  "date": "1824-1826",
  "event": "First Burma War",
  "details": "First war between British and Burma, resulting from Burmese expansion westwards and threats to Assam and the Brahmaputra Valley.",
  "tags": [ "British Empire", "Burma", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1826",
  "event": "Treaty of Yandabo",
  "details": "Treaty ending the First Burma War, resulting in significant concessions by Burma to Britain.",
  "tags": [ "British Empire", "Burma", "Spectrum Chapter 5"]
},
{
  "date": "1852",
  "event": "Second Burma War",
  "details": "Second war between British and Burma, driven by British commercial interests and imperialist policies.",
  "tags": [ "British Empire", "Burma", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1885",
  "event": "Annexation of Upper Burma by British",
  "details": "Final annexation of upper Burma by the British, following hostilities and conflicts with Burmese King Thibaw.",
  "tags": [ "British Empire", "Burma", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1935",
  "event": "Separation of Burma from India",
  "details": "Burma was separated from India in 1935 to weaken the link between Indian nationalist movements and Burma.",
  "tags": [ "British Empire", "Burma", "Spectrum Chapter 5"]
},
{
  "date": "04-01-1948",
  "event": "Independence of Burma",
  "details": "Burma gained independence on January 4, 1948, following intensified nationalist movements led by U Aung San during the Second World War.",
  "tags": [ "Burma", "Independence", "Spectrum Chapter 5"]
},
{
  "date": "1904",
  "event": "British Mission to Tibet and Treaty of Lhasa",
  "details": "British mission led by Younghusband entered Tibet, leading to the Treaty of Lhasa in 1904. The treaty imposed terms on Tibet and resulted in British influence in the region.",
  "tags": [ "British Empire", "Tibet", "Treaty", "Spectrum Chapter 5"]
},
{
  "date": "1907",
  "event": "Anglo-Russian Convention",
  "details": "Anglo-Russian convention of 1907 increased Russian influence in Persia, replacing British influence, and affected British plans regarding India.",
  "tags": [ "British Empire", "Russia", "Persia", "Spectrum Chapter 5"]
},
{
  "date": "1836",
  "event": "Forward Policy advocated by Auckland",
  "details": "Governor General Auckland advocated a forward policy in India to protect British interests from possible Russian aggression.",
  "tags": [ "British Empire", "Forward Policy", "Spectrum Chapter 5"]
},
{
  "date": "1838",
  "event": "Tripartite Treaty and First Anglo-Afghan War",
  "details": "Tripartite Treaty of 1838 between British, Sikhs, and Shah Shuja led to the First Anglo-Afghan War (1839–42) as part of the forward policy against perceived threats from the northwest.",
  "tags": [ "British Empire", "Afghanistan", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1839-1842",
  "event": "First Anglo-Afghan War",
  "details": "The First Anglo-Afghan War aimed to establish a permanent barrier against aggression from the northwest. It resulted in initial British success but ended with Afghan rebellion after British withdrawal.",
  "tags": [ "British Empire", "Afghanistan", "Military Conflict", "Spectrum Chapter 5"]
},
{
  "date": "1841",
  "event": "Treaty with Afghan Chiefs and British Evacuation of Afghanistan",
  "details": "British signed a treaty with Afghan chiefs agreeing to evacuate Afghanistan and restore Dost Mohammed, but the plan failed, leading to British re-occupation of Kabul in September 1842.",
  "tags": [ "British Empire", "Afghanistan", "Treaty", "Spectrum Chapter 5"]
},
{
  "date": "1864-1869",
  "event": "John Lawrence's Policy of Masterly Inactivity",
  "details": "John Lawrence implemented a policy of masterly inactivity as a reaction to the disasters of the First Anglo-Afghan War. It aimed to avoid interference in Afghan affairs and focused on practical common sense.",
  "tags": [ "British Empire", "Afghanistan", "Policy", "Spectrum Chapter 5"]
},
{
  "date": "1874-1880",
  "event": "Lord Lytton's Policy of Proud Reserve and Second Anglo-Afghan War",
  "details": "Lord Lytton implemented a policy of proud reserve to establish scientific frontiers and safeguard British spheres of influence. It led to the Second Anglo-Afghan War (1878–80) due to tensions with Sher Ali over Afghanistan's relations with Russia and British India.",
  "tags": [ "British Empire", "Afghanistan", "Military Conflict", "Policy", "Spectrum Chapter 5"]
},
{
  "date": "05-1879",
  "event": "Treaty of Gandamak",
  "details": "Treaty signed after the Second Anglo-Afghan War, in which Yakub Khan agreed to conduct Afghanistan's foreign policy under British guidance and cede territory to Britain.",
  "tags": [ "British Empire", "Afghanistan", "Treaty", "Spectrum Chapter 5"]
},
{
  "date": "1919-1921",
  "event": "Afghan Demand for Independence and Peace Treaty",
  "details": "After the First World War and the Russian Revolution, Afghanistan demanded full independence. Peace was achieved in 1921 after Habibullah's assassination and the declaration of war on the British by Amamullah.",
  "tags": [ "Afghanistan", "Independence", "Peace Treaty", "Spectrum Chapter 5"]
},
{
  "date": "1843",
  "event": "Conquest of Sindh by British",
  "details": "British conquest of Sindh extended their boundaries beyond the Indus and brought them into contact with Baluch and Pathan tribes.",
  "tags": [ "British Empire", "Sindh", "Spectrum Chapter 5"]
},
{
  "date": "1849",
  "event": "Annexation of Punjab by British",
  "details": "Annexation of Punjab by the British further extended their boundaries and brought them in contact with Baluch and Pathan tribes.",
  "tags": [ "British Empire", "Punjab", "Spectrum Chapter 5"]
},
  {
    "date": "1891-1892",
    "event": "British Occupation of Hunza and Nagar in Gilgit Valley",
    "details": "British occupation of Hunza and Nagar in Gilgit Valley alarmed Abdur Rahman, leading to the drawing of the Durand Line between Afghan and British territories.",
    "tags": [ "British Empire", "Afghanistan", "Gilgit Valley", "Spectrum Chapter 5"]
  },
  {
    "date": "1893",
    "event": "Durand Agreement",
    "details": "The Durand Agreement established a boundary line between Afghan and British territories but failed to keep peace, leading to tribal uprisings.",
    "tags": [ "British Empire", "Afghanistan", "Treaty", "Spectrum Chapter 5"]
  },
  {
    "date": "1899-1905",
    "event": "Curzon's Policy of Withdrawal and Concentration",
    "details": "Lord Curzon implemented a policy of withdrawal and concentration on the north-west frontier, resulting in a peaceful situation with occasional tribal uprisings.",
    "tags": [ "British Empire", "North-West Frontier", "Policy", "Spectrum Chapter 5"]
  },
  {
    "date": "01-1932",
    "event": "Constitution of NWFP as a Governor's Province",
    "details": "NWFP was constituted as a governor's province in January 1932, and since 1947, it belongs to Pakistan.",
    "tags": [ "North-West Frontier Province", "Pakistan", "Governor's Province", "Spectrum Chapter 5"]
  }
]



  const finalTimeline = [...marathaTimeline, ...britishTimeline, ...nawabOfBengalTimeline, ...chapterOneTimeline, ...britainTimeline, ...chapterFiveTimeline, ...bengalGovernorGeneralsTimeline, ...viceroysOfIndiaTimeline, ...governorGeneralsOfIndiaTimeline]
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

      tags.forEach(tag => {
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
          dateLabel.textContent = event.date; // Optionally use parseDate(event.date) to display formatted date
          const eventBox = document.createElement('div');
          eventBox.className = 'event-box';
          eventBox.innerHTML += "<strong>"+event.event+"</strong>" + "<br>" + (event.details || "");

          eventElement.appendChild(dot);
          eventElement.appendChild(dateLabel);
          eventElement.appendChild(eventBox);
          container.appendChild(eventElement);
      });
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
