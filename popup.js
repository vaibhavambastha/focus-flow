document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle');
    const status = document.getElementById('status');
  
    // Retrieve and set the current state of the extension
    chrome.storage.local.get(['extensionEnabled'], function(result) {
      const enabled = result.extensionEnabled || false;
      toggleSwitch.checked = enabled;
      status.textContent = `Status: ${enabled ? 'Enabled' : 'Disabled'}`;
    });
  
    // Handle toggle switch change
    toggleSwitch.addEventListener('change', function() {
      const newState = toggleSwitch.checked;
      chrome.storage.local.set({ extensionEnabled: newState }, function() {
        status.textContent = `Status: ${newState ? 'Enabled' : 'Disabled'}`;
        // Send a message to background script or content script if needed
        chrome.runtime.sendMessage({ action: 'toggleExtension', enabled: newState });
      });
    });
  });
  