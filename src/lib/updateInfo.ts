import { Columns, getRowsAmount, MAX_COLUMNS } from "./columnsInfo";

type Info = chrome.windows.UpdateInfo

interface Props {
  columns: Columns
  screen: Partial<typeof window.screen>
}

const updateData = ({ columns, screen }: Props): Info[] => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768
  const totalRowsAmount = getRowsAmount(columns)

  return columns.reduce((acc, col, index) => {
    const width = (screenWidth / MAX_COLUMNS) * col
    const height = screenHeight / totalRowsAmount

    const totalWidth = acc.map((a) => a.width || 0).reduce((a, b) => a + b, 0)
    const left = totalWidth % screenWidth

    const rowsAmount = Math.floor(totalWidth / screenWidth)
    const top = rowsAmount * height

    return [
      ...acc,
      {
        width,
        height,
        top,
        left
      }
    ]
  }, [] as Info[])

}

export { updateData }
