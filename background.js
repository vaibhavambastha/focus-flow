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
  