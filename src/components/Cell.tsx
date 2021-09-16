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
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={() => onClick(columns)}
      className={`transitions-colors duration-500`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-12 grid grid-cols-12 gap-2">
        {columns.map((column, index) => {
          const isFilled = column.type === 'filled'
          const isHoled = column.type === 'holed'
          return (
            <div
              key={index}
              className={`border-2 rounded
                  ${isFilled ? 'border-layout-main' : 'border-layout-stroke'}
                  ${isFilled && hovered ? 'bg-layout-main' : ''}
                  ${isHoled && hovered ? 'bg-layout-inactive' : ''}
                  col-span-${column.cols}
                  transition-all`}
            ></div>
          )
        })}
      </div>
    </button>
  )
}
export default Cell
