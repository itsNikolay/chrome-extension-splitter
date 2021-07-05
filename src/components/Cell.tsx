import React, { useState } from 'react'
import { Column } from '../lib/interfaces'
import { appendAllInfo, appendScreen } from '../lib/updateInfo'
import { resizeAllWindow } from '../lib/windows'

const onClick = async (columns: Column[]) => {
  const screen = window.screen
  if (!screen) { return }

  const extendedInfos = appendScreen(columns, screen)
  const extendedInfos2 = appendAllInfo(extendedInfos)
  return await resizeAllWindow(extendedInfos2)
}

interface Props {
  columns: Column[]
}

const Cell = ({ columns }: Props) => {
  return (
    <button
      onClick={() => onClick(columns)}
      className="transitions-colors duration-500 hover:bg-blue-100"
    >
      <div className="h-12 grid grid-cols-12 gap-2">
        {columns.map((column, index) => (
          <div
            key={index}
            className={
              `border
                  ${column.type === 'filled' ? 'border-blue-500' : 'border-grey'}
                  col-span-${column.cols}
                  transition-all`
            }
          ></div>
        ))}
      </div>
    </button>
  )
}
export default Cell
