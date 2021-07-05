import { getRowsAmount, MAX_COLUMNS } from "./columnsInfo";
import { AppScreen, Column, ExtendedInfo } from "./interfaces";

const getWindowInfo = (screen: AppScreen) => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768

  return (
    maxColumns: number,
    column: Column,
    totalWidth: number,
    totalRows: number
  ) => {
    const rowsAmount = Math.floor(totalWidth / screenWidth)
    const width = (screenWidth / maxColumns) * column.cols
    const left = totalWidth % screenWidth
    const height = screenHeight / totalRows
    const top = rowsAmount * height
    const focused = true

    return ({
      column,
      info: {
        width,
        top,
        height,
        left,
        focused,
      }
    })
  }
}

interface Props {
  columns: Column[]
  screen: AppScreen
}

const updateData = ({ columns, screen }: Props): ExtendedInfo[] => {
  const initWindowInfo = getWindowInfo(screen)
  const totalRows = getRowsAmount(columns)

  return columns.reduce((acc, column) => {
    const totalWidth = acc.map((a) => a.info.width || 0).reduce((a, b) => a + b, 0)
    const windowInfo = initWindowInfo(MAX_COLUMNS, column, totalWidth, totalRows)

    return [
      ...acc,
      windowInfo
    ]
  }, [] as ExtendedInfo[])

}

export { updateData }
