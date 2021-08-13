import { Column } from "./interfaces"

const MAX_COLUMNS = 12
const MAX_ROWS = 12

type ColumnType = { [key: string]: Column[] }

const ONE_COLUMN_TYPES: ColumnType = {
  oneTwelve: [
    { type: "filled", cols: 12, rows: 12 }
  ],
  oneThreeNine: [
    { type: "filled", cols: 3, rows: 12 },
    { type: "holed", cols: 9, rows: 12 },
  ],
  oneFourEight: [
    { type: "filled", cols: 4, rows: 12 },
    { type: "holed", cols: 8, rows: 12 },
  ],
  oneFiveSeven: [
    { type: "filled", cols: 5, rows: 12 },
    { type: "holed", cols: 7, rows: 12 },
  ],
  oneSixSix: [
    { type: "filled", cols: 6, rows: 12 },
    { type: "holed", cols: 6, rows: 12 },
  ],
  oneSevenFive: [
    { type: "filled", cols: 7, rows: 12 },
    { type: "holed", cols: 5, rows: 12 },
  ],
  oneEightFour: [
    { type: "filled", cols: 8, rows: 12 },
    { type: "holed", cols: 4, rows: 12 },
  ],
  oneNineThree: [
    { type: "filled", cols: 9, rows: 12 },
    { type: "holed", cols: 3, rows: 12 },
  ],
  oneHoledThree: [
    { type: "holed", cols: 9, rows: 12 },
    { type: "filled", cols: 3, rows: 12 },
  ],
  oneEightFourFilled: [
    { type: "holed", cols: 8, rows: 12 },
    { type: "filled", cols: 4, rows: 12 },
  ],
  oneSevenFiveFilled: [
    { type: "holed", cols: 7, rows: 12 },
    { type: "filled", cols: 5, rows: 12 },
  ],
  oneHoledSix: [
    { type: "holed", cols: 6, rows: 12 },
    { type: "filled", cols: 6, rows: 12 },
  ],
  oneFiveSevenFilled: [
    { type: "holed", cols: 5, rows: 12 },
    { type: "filled", cols: 7, rows: 12 },
  ],
  oneFourEightFilled: [
    { type: "holed", cols: 4, rows: 12 },
    { type: "filled", cols: 8, rows: 12 },
  ],
  oneHoledNine: [
    { type: "holed", cols: 3, rows: 12 },
    { type: "filled", cols: 9, rows: 12 },
  ],
  oneHoledSixFilledOneHoled: [
    { type: "holed", cols: 3, rows: 12 },
    { type: "filled", cols: 6, rows: 12 },
    { type: "holed", cols: 3, rows: 12 },
  ],
  fourHoledFourFilledFourHoled: [
    { type: "holed", cols: 4, rows: 12 },
    { type: "filled", cols: 4, rows: 12 },
    { type: "holed", cols: 4, rows: 12 },
  ],
}

const TWO_COLUMN_TYPES: ColumnType = {
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

const THREE_COLUMN_TYPES: ColumnType = {
  threeFourFourFour: [
    { type: "filled", cols: 4, rows: 12 },
    { type: "filled", cols: 4, rows: 12 },
    { type: "filled", cols: 4, rows: 12 }
  ],
}

const FOUR_COLUMN_TYPES: ColumnType = {
  fourSixSixSixSix: [
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 },
    { type: "filled", cols: 6, rows: 6 }
  ],
}

const COLUMN_TYPES: ColumnType = {
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
  isHoled,
  ONE_COLUMN_TYPES,
  TWO_COLUMN_TYPES,
  THREE_COLUMN_TYPES,
  FOUR_COLUMN_TYPES
}

export type { Column, ColumnType }
