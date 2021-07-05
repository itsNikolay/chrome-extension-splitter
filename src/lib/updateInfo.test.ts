import { appendAllInfo, appendScreen } from "./updateInfo";
import { COLUMN_TYPES } from "./columnsInfo";

const screen = {
  width: 3000,
  height: 1000
}

it('12', () => {
  const extendedInfos = appendScreen(COLUMN_TYPES.oneTwelve, screen)
  const res = appendAllInfo(extendedInfos)
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.oneTwelve[0],
      screen,
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
  const extendedInfos = appendScreen(COLUMN_TYPES.twoSix, screen)
  const res = appendAllInfo(extendedInfos)
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoSix[0],
      screen,
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
      screen,
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
  const extendedInfos = appendScreen(COLUMN_TYPES.twoThree, screen)
  const res = appendAllInfo(extendedInfos)
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoThree[0],
      screen,
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
      screen,
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
  const extendedInfos = appendScreen(COLUMN_TYPES.twoNine, screen)
  const res = appendAllInfo(extendedInfos)
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.twoNine[0],
      screen,
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
      screen,
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
  const extendedInfos = appendScreen(COLUMN_TYPES.fourSix, screen)
  const res = appendAllInfo(extendedInfos)
  expect(res).toEqual([
    {
      column: COLUMN_TYPES.fourSix[0],
      screen,
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
      screen,
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
      screen,
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
      screen,
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
