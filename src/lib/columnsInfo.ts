import { Column } from "./interfaces"

const MAX_COLUMNS = 12
const MAX_ROWS = 12

const COLUMN_TYPES: { [key: string]: Column[] } = {
  oneTwelve: [
    { type: "filled", cols: 12, rows: 12 }
  ],
  twoSix: [
    { type: "filled", cols: 6, rows: 12 },
    { type: "filled", cols: 6, rows: 12 }
  ],
  twoThree: [
    { type: "filled", cols: 3, rows: 12 },
    { type: "filled", cols: 9, rows: 12 }
  ],
  twoNine: [
    { type: "filled", cols: 9, rows: 12 },
    { type: "filled", cols: 3, rows: 12 }
  ],
  fourSix: [
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 }
  ],
}

export {
  COLUMN_TYPES,
  MAX_COLUMNS,
  MAX_ROWS
}

export type { Column }
