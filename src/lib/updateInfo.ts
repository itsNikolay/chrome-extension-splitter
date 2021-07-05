import { MAX_COLUMNS, MAX_ROWS } from "./columnsInfo";
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
  maxRows: number,
  totalWidth: number,
): ExtendedInfo => {
  const screenWidth = extendedInfo?.screen?.width || 1024
  const screenHeight = extendedInfo?.screen?.height || 768
  const width = (screenWidth / maxColumns) * extendedInfo.column.cols
  const height = (screenHeight / maxRows) * extendedInfo.column.rows
  const left = totalWidth % screenWidth
  const top = Math.floor(totalWidth / screenWidth) * height
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
  return extendedInfos.reduce((acc, extendedInfo) => {
    const totalWidth = acc.map((a) => a?.info?.width || 0).reduce((a, b) => a + b, 0)
    const info = appendInfo(extendedInfo, MAX_COLUMNS, MAX_ROWS, totalWidth)

    return [
      ...acc,
      info
    ]
  }, [] as ExtendedInfo[])

}

export { appendAllInfo, appendScreen }
