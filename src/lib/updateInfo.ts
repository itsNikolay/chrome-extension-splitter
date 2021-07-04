import { Columns, getRowsAmount, MAX_COLUMNS } from "./columnsInfo";

interface Props {
  columns: Columns
  screen: Partial<typeof window.screen>
}

const updateData = ({ columns, screen }: Props) => {
  const screenWidth = screen.width || 1024
  const screenHeight = screen.height || 768
  const rowsAmount = getRowsAmount(columns)

  return columns.map((col) => ({
    width: screenWidth / MAX_COLUMNS * col,
    height: screenHeight / rowsAmount
  }))
}

export { updateData }
