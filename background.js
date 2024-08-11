function updateExtensionState() {
    chrome.storage.sync.get('enabled', function(data) {
      if (data.enabled === false) {
        chrome.action.disable();
      } else {
        chrome.action.enable();
      }
    });
  }
  
  // Initialize state when the extension is installed
  chrome.runtime.onInstalled.addListener(updateExtensionState);
  
  // Update state on storage change
  chrome.storage.onChanged.addListener(function(changes, area) {
    if (area === 'sync' && changes.enabled) {
      updateExtensionState();
    }
  });
  