import React from 'react'
import AppWindows from '../lib/windows'

const res = {
  oneTwelve: [12, null],
  twoSix: [6, 6],
  twoThree: [3, 9],
  twoNine: [9, 3],
  fourSix: [6, 6, 6, 6],
}

const Grid = () => {
  return (
    <div className="grid grid-row-3 gap-5">
      {Object.entries(res).map(([key, row]) => {
        return (
          <button
            key={key}
            className="hover:shadow-lg transition-all"
            onClick={() => AppWindows().resize({ width: 100, height: 100 })}
          >
            <div className="h-12 grid grid-cols-12 gap-2">
              {row.filter((num) => num !== null).map((num, index) => {
                return (
                  <div
                    className={`border border-blue-500 col-span-${num}`}
                    key={index}
                  ></div>
                )
              })}
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default Grid
