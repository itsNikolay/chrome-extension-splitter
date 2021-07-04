type Info = chrome.windows.UpdateInfo
type Wind = chrome.windows.Window

const getAllWindows = () => chrome.windows.getAll()

const getCurrentWindow = () => chrome.windows.getCurrent()

const createWindow = (info: Info) => chrome.windows.create(info)

const updateWindow = async (info: Info, wind: Wind) =>
  wind?.id ? chrome.windows.update(wind.id, info) : null

const resizeAllWindow = async (infos: Info[]) => {
  const winds = await getAllWindows()
  const currentWind = await getCurrentWindow()
  const sortedWinds = winds.sort((a, b) => (a?.id === currentWind?.id ? 1 : 0))
  debugger


  const res = infos.map((info, index) => {
    const wind = sortedWinds[index]
    if (wind) {
      return updateWindow(info, wind)
    } else {
      return createWindow(info)
    }
  })

  Promise.all(res)
}

export {
  resizeAllWindow
}
