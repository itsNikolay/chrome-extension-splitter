import { getRowsAmount, MAX_COLUMNS } from "./columnsInfo";
import { AppScreen, Column, ExtendedInfo } from "./interfaces";

const appendScreen = (
  columns: Column[],
  screen: AppScreen
): ExtendedInfo[] => columns.map((column) => ({
  column,
  screen
}))

const appendInfo = (
  extendedInfo: ExtendedInfo,
  maxColumns: number,
  totalWidth: number,
  totalRows: number
): ExtendedInfo => {
  const screenWidth = extendedInfo?.screen?.width || 1024
  const screenHeight = extendedInfo?.screen?.height || 768
  const rowsAmount = Math.floor(totalWidth / screenWidth)
  const width = (screenWidth / maxColumns) * extendedInfo.column.cols
  const left = totalWidth % screenWidth
  const height = screenHeight / totalRows
  const top = rowsAmount * height
  const focused = true

  return ({
    ...extendedInfo,
    info: {
      width,
      top,
      height,
      left,
      focused,
    }
  })
}

const appendAllInfo = (extendedInfos: ExtendedInfo[]) => {
  const totalRows = getRowsAmount(extendedInfos.map((extendedInfo) => extendedInfo.column))

  return extendedInfos.reduce((acc, extendedInfo) => {
    const totalWidth = acc.map((a) => a?.info?.width || 0).reduce((a, b) => a + b, 0)
    const info = appendInfo(extendedInfo, MAX_COLUMNS, totalWidth, totalRows)

    return [
      ...acc,
      info
    ]
  }, [] as ExtendedInfo[])

}

export { appendAllInfo, appendScreen }
