import { Column } from "./interfaces"

const MAX_COLUMNS = 12

const COLUMN_TYPES: { [key: string]: Column[] } = {
  oneTwelve: [
    { type: "filled", cols: 12 }
  ],
  twoSix: [
    { type: "filled", cols: 6 },
    { type: "filled", cols: 6 }
  ],
  twoThree: [
    { type: "filled", cols: 3 },
    { type: "filled", cols: 9 }
  ],
  twoNine: [
    { type: "filled", cols: 9 },
    { type: "filled", cols: 3 }
  ],
  fourSix: [
    { type: "filled", cols: 6 },
    { type: "filled", cols: 6 },
    { type: "filled", cols: 6 },
    { type: "filled", cols: 6 }
  ],
}

const getColumnsSum = (columns: Column[]) =>
  columns.reduce((a, b) => a + b.cols, 0)

const getRowsAmount = (columns: Column[]) =>
  getColumnsSum(columns) / MAX_COLUMNS

export {
  COLUMN_TYPES,
  MAX_COLUMNS,
  getColumnsSum,
  getRowsAmount
}

export type { Column }
