import { ExtendedInfo, Info, Wind } from "./interfaces"
import { withoutHoled } from "./updateInfo"

const getAllWindows = () => chrome.windows.getAll()

const getCurrentWindow = () => chrome.windows.getCurrent()

const createWindow = (info: Info) => chrome.windows.create(info)

const updateWindow = async (info: Info, wind: Wind) =>
  wind?.id ? chrome.windows.update(wind.id, info) : null

const getSortedWindows = (windows: Wind[], currentWindow: Wind) =>
  windows.sort((a, b) =>
    (b.id === currentWindow.id ? 1 : -1))

const resizeAllWindow = async (extendedInfos: ExtendedInfo[]) => {
  const winds = await getAllWindows()
  const currentWind = await getCurrentWindow()
  const sortedWinds = getSortedWindows(winds, currentWind)

  const res = withoutHoled(extendedInfos)
    .map((extendedInfo, index) => {
      if (!extendedInfo.info) { return }
      if (extendedInfo.column.type === 'holed') { return }

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
  resizeAllWindow,
  getSortedWindows
}
