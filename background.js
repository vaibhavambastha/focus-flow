chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'toggleExtension') {
      const enabled = message.enabled;
      chrome.storage.local.set({ extensionEnabled: enabled }, function() {
        if (enabled) {
          // Enable your extension's functionality
          // E.g., add rules, activate content scripts, etc.
        } else {
          // Disable your extension's functionality
          // E.g., remove rules, deactivate content scripts, etc.
        }
      });
    }
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.youtube.com' }
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.instagram.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  