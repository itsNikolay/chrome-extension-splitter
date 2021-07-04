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
      width: 3000,
      height: 1000,
      top: 0,
      left: 0
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
      width: 1500,
      height: 1000,
      top: 0,
      left: 0
    },
    {
      width: 1500,
      height: 1000,
      top: 0,
      left: 1500
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
      width: 750,
      height: 1000,
      top: 0,
      left: 0
    },
    {
      width: 2250,
      height: 1000,
      top: 0,
      left: 750
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
      width: 2250,
      height: 1000,
      top: 0,
      left: 0
    },
    {
      width: 750,
      height: 1000,
      top: 0,
      left: 2250
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
      width: 1500,
      height: 500,
      top: 0,
      left: 0
    },
    {
      width: 1500,
      height: 500,
      top: 0,
      left: 1500
    },
    {
      width: 1500,
      height: 500,
      top: 500,
      left: 0
    },
    {
      width: 1500,
      height: 500,
      top: 500,
      left: 1500
    },
  ]);
});
