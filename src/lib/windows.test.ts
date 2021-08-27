import { Wind } from "./interfaces";
import { getSortedWindows } from "./windows";

const windows: Wind[] = [
  {
    "alwaysOnTop": false,
    "focused": false,
    "height": 2160,
    "id": 1187,
    "incognito": false,
    "left": 0,
    "state": "normal",
    "top": 0,
    "type": "normal",
    "width": 960
  },
  {
    "alwaysOnTop": false,
    "focused": false,
    "height": 2160,
    "id": 1685,
    "incognito": false,
    "left": 1452,
    "state": "normal",
    "top": 23,
    "type": "normal",
    "width": 1920
  }
]

const currentWindow: Wind = {
  "alwaysOnTop": false,
  "focused": false,
  "height": 2160,
  "id": 1685,
  "incognito": false,
  "left": 1452,
  "state": "normal",
  "top": 23,
  "type": "normal",
  "width": 1920
}

it('sorts windows in right sequence', () => {
  const sortedWindows = getSortedWindows(windows, currentWindow)
  const sortedWindowIds = sortedWindows.map((w) => w.id)
  expect(sortedWindowIds).toEqual([1685, 1187]);
});
