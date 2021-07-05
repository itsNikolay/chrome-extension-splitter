import { Column } from "./interfaces"

const MAX_COLUMNS = 12
const MAX_ROWS = 12

const ONE_COLUMN_TYPES: { [key: string]: Column[] } = {
  oneTwelve: [
    { type: "filled", cols: 12, rows: 12 }
  ],
  oneThreeNine: [
    { type: "filled", cols: 3, rows: 12 },
    { type: "holed", cols: 9, rows: 12 },
  ],
  oneSixSix: [
    { type: "filled", cols: 6, rows: 12 },
    { type: "holed", cols: 6, rows: 12 },
  ],
  oneNineThree: [
    { type: "filled", cols: 9, rows: 12 },
    { type: "holed", cols: 3, rows: 12 },
  ],
  oneHoledThree: [
    { type: "holed", cols: 9, rows: 12 },
    { type: "filled", cols: 3, rows: 12 },
  ],
  oneHoledSix: [
    { type: "holed", cols: 6, rows: 12 },
    { type: "filled", cols: 6, rows: 12 },
  ],
  oneHoledNine: [
    { type: "holed", cols: 3, rows: 12 },
    { type: "filled", cols: 9, rows: 12 },
  ],
}

const TWO_COLUMN_TYPES: { [key: string]: Column[] } = {
  twoSixSix: [
    { type: "filled", cols: 6, rows: 12 },
    { type: "filled", cols: 6, rows: 12 }
  ],
  twoThreeNine: [
    { type: "filled", cols: 3, rows: 12 },
    { type: "filled", cols: 9, rows: 12 }
  ],
  twoNineThree: [
    { type: "filled", cols: 9, rows: 12 },
    { type: "filled", cols: 3, rows: 12 }
  ],
  twoSixHoledSixHoled: [
    { type: "filled", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 }
  ],
  twoHoledSixHoledSix: [
    { type: "holed", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 }
  ],
  twoSixSixHoledHoled: [
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 }
  ],
  twoHoledHoledSixSix: [
    { type: "holed", cols: 6, rows: 6 },
    { type: "holed", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 }
  ],
}

const THREE_COLUMN_TYPES: { [key: string]: Column[] } = {
  threeFourFourFour: [
    { type: "filled", cols: 4, rows: 12 },
    { type: "filled", cols: 4, rows: 12 },
    { type: "filled", cols: 4, rows: 12 }
  ],
}

const FOUR_COLUMN_TYPES: { [key: string]: Column[] } = {
  fourSixSixSixSix: [
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 }
  ],
}

const COLUMN_TYPES: { [key: string]: Column[] } = {
  ...ONE_COLUMN_TYPES,
  ...TWO_COLUMN_TYPES,
  ...THREE_COLUMN_TYPES,
  ...FOUR_COLUMN_TYPES
}

const isHoled = (column: Column) => column.type == 'holed'

export {
  COLUMN_TYPES,
  MAX_COLUMNS,
  MAX_ROWS,
  isHoled
}

export type { Column }
