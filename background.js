// Listener for messages from other parts of the extension
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'toggleExtension') {
      const enabled = message.enabled;
      chrome.storage.local.set({ extensionEnabled: enabled }, function() {
        console.log('Background script received toggle message:', enabled);
      });
    }
  });
  
  // Setup rules when the extension is installed
  chrome.runtime.onInstalled.addListener(() => {
    // Remove any existing rules
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      // Add new rules to show page action for specific URLs
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
  