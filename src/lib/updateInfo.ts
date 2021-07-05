import { getAppWindow } from "./appWindow";
import { Columns, getRowsAmount, MAX_COLUMNS } from "./columnsInfo";

type Info = chrome.windows.UpdateInfo

interface Props {
  columns: Columns
  screen: Partial<typeof window.screen>
}

const updateData = ({ columns, screen }: Props): Info[] => {
  const initAppWindow = getAppWindow(screen)
  const totalRows = getRowsAmount(columns)

  return columns.reduce((acc, col) => {
    const totalWidth = acc.map((a) => a.width || 0).reduce((a, b) => a + b, 0)
    const appWindow = initAppWindow(totalWidth)

    const width = appWindow.getWidth(MAX_COLUMNS, col)
    const height = appWindow.getHeight(totalRows)
    const left = appWindow.getLeft()
    const top = appWindow.getTop(height)
    const focused = true

    return [
      ...acc,
      {
        width,
        height,
        top,
        left,
        focused
      }
    ]
  }, [] as Info[])

}

export { updateData }
