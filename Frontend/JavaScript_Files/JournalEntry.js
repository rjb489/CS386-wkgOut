class JournalEntry
{
   constructor() 
   {
      this.entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
   }

   saveEntry() 
   {
      const entryText = document.getElementById('journalEntry').value;
      const currentTime = new Date().toISOString();
      const entryObject = { date: currentTime, text: entryText };

      // Add new entry to the array of entries
      this.entries.push(entryObject);

      // Save back to localStorage
      localStorage.setItem('journalEntries', JSON.stringify(this.entries));

      // Clear the textarea
      document.getElementById('journalEntry').value = '';
      alert('Entry saved!');
   }

   loadEntry() 
   {
      const entriesDiv = document.getElementById('pastEntries');
      entriesDiv.innerHTML = '';

      // Display each entry with the newest first
      this.entries.slice().reverse().forEach(entry => 
      {
         const entryDiv = document.createElement('div');
         entryDiv.style.marginBottom = '20px';
         entryDiv.textContent = `Date: ${entry.date}, Entry: ${entry.text}`;
         entriesDiv.appendChild(entryDiv);
      });
   }
}

// Initialize a new JournalEntry object
const journal = new JournalEntry();

// Attach methods to buttons
document.getElementById('saveButton').onclick = () => journal.saveEntry();
document.getElementById('loadButton').onclick = () => journal.loadEntry();