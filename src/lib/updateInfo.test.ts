import { updateData } from "./updateInfo";
import { COLUMN_TYPES } from "./columnsInfo";

const screen = {
  width: 3000,
  height: 1000
}

it('12', () => {
  const res = updateData({
    columns: COLUMN_TYPES.oneTwelve,
    screen
  })
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.oneTwelve[0],
      info: {
        width: 3000,
        height: 1000,
        top: 0,
        left: 0,
        focused: true
      }
    }
  ]);
});

it('6,6', () => {
  const res = updateData({
    columns: COLUMN_TYPES.twoSix,
    screen
  })
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoSix[0],
      info: {
        width: 1500,
        height: 1000,
        top: 0,
        left: 0,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.twoSix[1],
      info: {
        width: 1500,
        height: 1000,
        top: 0,
        left: 1500,
        focused: true
      }
    }
  ]);
});

it('3,9', () => {
  const res = updateData({
    columns: COLUMN_TYPES.twoThree,
    screen
  })
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoThree[0],
      info: {
        width: 750,
        height: 1000,
        top: 0,
        left: 0,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.twoThree[1],
      info: {
        width: 2250,
        height: 1000,
        top: 0,
        left: 750,
        focused: true
      }
    }
  ]);
});

it('9,3', () => {
  const res = updateData({
    columns: COLUMN_TYPES.twoNine,
    screen
  })
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoNine[0],
      info: {
        width: 2250,
        height: 1000,
        top: 0,
        left: 0,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.twoNine[1],
      info: {
        width: 750,
        height: 1000,
        top: 0,
        left: 2250,
        focused: true
      },
    },
  ]);
});

it('6,6,6,6', () => {
  const res = updateData({
    columns: COLUMN_TYPES.fourSix,
    screen
  })
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.fourSix[0],
      info: {
        width: 1500,
        height: 500,
        top: 0,
        left: 0,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.fourSix[1],
      info: {
        width: 1500,
        height: 500,
        top: 0,
        left: 1500,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.fourSix[2],
      info: {
        width: 1500,
        height: 500,
        top: 500,
        left: 0,
        focused: true
      },
    },
    {
      column: COLUMN_TYPES.fourSix[3],
      info: {
        width: 1500,
        height: 500,
        top: 500,
        left: 1500,
        focused: true
      },
    },
  ]);
});
