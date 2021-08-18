const getMessage = (key: string) =>
  chrome.i18n?.getMessage(key) || key.replace('_', ' ')

export { getMessage }
