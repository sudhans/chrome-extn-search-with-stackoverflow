chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
      "title": 'Search StackOverflow for "%s"',
      "contexts": ["selection"],
      "id": "myContextMenuId"
  });
});
  
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.create({  
      url: "https://stackoverflow.com/search?q=" + encodeURIComponent(info.selectionText)
  });
})