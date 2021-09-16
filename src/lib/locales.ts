const getMessage = (key: string, dummy?: string) =>
  chrome.i18n?.getMessage(key) || (dummy || key.replace(/_/g, ' '))

export { getMessage }
