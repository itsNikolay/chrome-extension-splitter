import React from 'react'
import { Columns, COLUMN_TYPES } from '../lib/columnsInfo'
import { updateData } from '../lib/updateInfo'
import { resizeAllWindow } from '../lib/windows'

const onClick = async (columns: Columns) => {
  const screen = window.screen

  if (!screen) { return }

  const data = updateData({ columns, screen })
  return await resizeAllWindow(data)
}


const Grid = () => {
  return (
    <div className="grid grid-row-3 gap-5">
      {Object.entries(COLUMN_TYPES).map(([key, columns]) => (
        <button
          key={key}
          className="hover:shadow-lg transition-all"
          onClick={() => onClick(columns)}
        >
          <div className="h-12 grid grid-cols-12 gap-2">
            {columns.map((col, index) => (
              <div
                key={index}
                className={`border border-blue-500 col-span-${col}`}
              ></div>
            ))}
          </div>
        </button>
      ))}
    </div>
  )
}

export default Grid
