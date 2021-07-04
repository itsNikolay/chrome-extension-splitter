const AppWindows = () => {
  const bg = chrome.extension.getBackgroundPage()
  const screen = bg?.screen
  const width = screen?.width
  const height = screen?.height
  const getAllWindows = chrome.windows.getAll
  const createWindow = () => {
    return chrome.windows.create({

    })
  }

  const resize = async (info: chrome.windows.UpdateInfo) => {
    const currentWindow = await chrome.windows.getCurrent()
    if (!currentWindow?.id) { return }

    return chrome.windows.update(currentWindow.id, info)
  }

  const calculate = (): chrome.windows.UpdateInfo[] | null => {
    if (!width) { return null }

    const firstWidth = width / 2
    const secondWidth = width - firstWidth

    return [
      { width: firstWidth, height },
      { width: secondWidth, height }
    ]
  }

  return {
    calculate,
    getAllWindows,
    resize
  }
}
export default AppWindows
