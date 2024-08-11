function updateExtensionState() {
    chrome.storage.sync.get('enabled', function(data) {
      if (data.enabled === false) {
        chrome.action.disable(); // Disable the extension if 'enabled' is false
      } else {
        chrome.action.enable(); // Enable the extension if 'enabled' is true
      }
    });
  }
  
  // Initial check when the extension is installed
  chrome.runtime.onInstalled.addListener(updateExtensionState);
  
  // Update state on storage change
  chrome.storage.onChanged.addListener(function(changes, area) {
    if (area === 'sync' && changes.enabled) {
      updateExtensionState();
    }
  });
  