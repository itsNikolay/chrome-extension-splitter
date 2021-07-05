import { Columns, getRowsAmount, MAX_COLUMNS } from "./columnsInfo";

type AppScreen = Partial<typeof window.screen>
type Info = chrome.windows.UpdateInfo

interface Props {
  columns: Columns
  screen: AppScreen
}

const getWindowInfo = (screen: AppScreen) => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768

  return (maxColumns: number) => (col: number) => (totalWidth: number) => (totalRows: number) => {
    const rowsAmount = Math.floor(totalWidth / screenWidth)
    const width = (screenWidth / maxColumns) * col
    const left = totalWidth % screenWidth
    const height = screenHeight / totalRows
    const top = rowsAmount * height
    const focused = true

    return ({
      width,
      top,
      height,
      left,
      focused
    })
  }
}

const updateData = ({ columns, screen }: Props): Info[] => {
  const initWindowInfo = getWindowInfo(screen)
  const totalRows = getRowsAmount(columns)

  return columns.reduce((acc, col) => {
    const totalWidth = acc.map((a) => a.width || 0).reduce((a, b) => a + b, 0)
    const windowInfo = initWindowInfo(MAX_COLUMNS)(col)(totalWidth)(totalRows)

    return [
      ...acc,
      windowInfo
    ]
  }, [] as Info[])

}

export { updateData }
