document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const status = document.getElementById('status');
  
    // Handle button click
    toggleButton.addEventListener('click', function() {
      chrome.storage.local.get(['featureEnabled'], function(result) {
        const enabled = result.featureEnabled || false;
        const newStatus = !enabled;
        chrome.storage.local.set({ featureEnabled: newStatus }, function() {
          status.textContent = `Status: ${newStatus ? 'Enabled' : 'Disabled'}`;
          // Send a message to content scripts or background script if needed
          chrome.runtime.sendMessage({ action: 'toggleFeature', enabled: newStatus });
        });
      });
    });
  
    // Initialize status from storage
    chrome.storage.local.get(['featureEnabled'], function(result) {
      const enabled = result.featureEnabled || false;
      status.textContent = `Status: ${enabled ? 'Enabled' : 'Disabled'}`;
    });
  });
  