import { getAppScreen } from "./appScreen";
import { Columns, getRowsAmount, MAX_COLUMNS } from "./columnsInfo";

type Info = chrome.windows.UpdateInfo

interface Props {
  columns: Columns
  screen: Partial<typeof window.screen>
}

const updateData = ({ columns, screen }: Props): Info[] => {
  const appScreen = getAppScreen(screen)
  const totalRows = getRowsAmount(columns)

  return columns.reduce((acc, col) => {
    const totalWidth = acc.map((a) => a.width || 0).reduce((a, b) => a + b, 0)

    const width = appScreen.getWidth(MAX_COLUMNS, col)
    const height = appScreen.getHeight(totalRows)
    const left = appScreen.getLeft(totalWidth)
    const top = appScreen.getTop(totalWidth, height)

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
