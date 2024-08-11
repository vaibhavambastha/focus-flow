document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle');
    const status = document.getElementById('status');
  
    console.log('Popup script loaded.');
  
    // Check if chrome.storage is available
    if (chrome.storage && chrome.storage.local) {
      console.log('chrome.storage is available.');
  
      // Retrieve and set the current state of the extension
      chrome.storage.local.get(['extensionEnabled'], function(result) {
        console.log('Retrieved storage result:', result);
        const enabled = result.extensionEnabled !== undefined ? result.extensionEnabled : false;
        toggleSwitch.checked = enabled;
        status.textContent = `Status: ${enabled ? 'Enabled' : 'Disabled'}`;
      });
  
      // Handle toggle switch change
      toggleSwitch.addEventListener('change', function() {
        const newState = toggleSwitch.checked;
        chrome.storage.local.set({ extensionEnabled: newState }, function() {
          status.textContent = `Status: ${newState ? 'Enabled' : 'Disabled'}`;
          console.log('Extension state updated:', newState);
          // Send a message to background script or content script if needed
          chrome.runtime.sendMessage({ action: 'toggleExtension', enabled: newState });
        });
      });
    } else {
      console.error('chrome.storage is not available');
    }
  });
  