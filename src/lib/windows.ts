import { ExtendedInfo, Info, Wind } from "./interfaces"

const getAllWindows = () => chrome.windows.getAll()

const getCurrentWindow = () => chrome.windows.getCurrent()

const createWindow = (info: Info) => chrome.windows.create(info)

const updateWindow = async (info: Info, wind: Wind) =>
  wind?.id ? chrome.windows.update(wind.id, info) : null

const resizeAllWindow = async (extendedInfos: ExtendedInfo[]) => {
  const winds = await getAllWindows()
  const currentWind = await getCurrentWindow()
  const sortedWinds = winds.sort((a, b) => (a?.id === currentWind?.id ? 1 : 0))

  const res = extendedInfos.map((extendedInfo, index) => {
    const wind = sortedWinds[index]
    if (wind) {
      return updateWindow(extendedInfo.info, wind)
    } else {
      return createWindow(extendedInfo.info)
    }
  })

  await Promise.all(res)
}

export {
  resizeAllWindow
}
