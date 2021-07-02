// The background script is the extension's event handler
// https://developer.chrome.com/docs/extensions/mv3/background_pages/
chrome.runtime?.onInstalled?.addListener(() => {
  console.log('App Installed')
});
