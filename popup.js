document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
  
    // Load the current state
    chrome.storage.sync.get('enabled', function(data) {
      toggle.checked = data.enabled !== false; // Default to true if 'enabled' is not set
    });
  
    // Listen for changes to the toggle
    toggle.addEventListener('change', function() {
      chrome.storage.sync.set({ 'enabled': toggle.checked }, function() {
        console.log('Toggle state saved:', toggle.checked);
      });
    });
  });
  