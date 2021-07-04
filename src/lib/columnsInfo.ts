type Columns = number[]

const MAX_COLUMNS = 12

const COLUMN_TYPES: { [key: string]: Columns } = {
  oneTwelve: [12],
  twoSix: [6, 6],
  twoThree: [3, 9],
  twoNine: [9, 3],
  fourSix: [6, 6, 6, 6],
}

const getColumnsSum = (columns: Columns) =>
  columns.reduce((a, b) => a + b)

const getRowsAmount = (columns: Columns) =>
  getColumnsSum(columns) / MAX_COLUMNS

export {
  COLUMN_TYPES,
  MAX_COLUMNS,
  getColumnsSum,
  getRowsAmount
}
export type { Columns }
