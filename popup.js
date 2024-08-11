document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
  
    // Load the current state
    chrome.storage.sync.get('enabled', function(data) {
      if (data.enabled === false) {
        statusElement.textContent = 'Extension is Disabled';
      } else {
        statusElement.textContent = 'Extension is Enabled';
      }
    });
  });
  