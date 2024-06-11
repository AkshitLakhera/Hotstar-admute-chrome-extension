chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.scripting.executeScript(details.tabId, {file: "content.js"});
  }, {url: [{hostSuffix: 'hotstar.com'}]});
  