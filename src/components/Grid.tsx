import React from 'react'
import { ColumnType } from '../lib/columnsInfo'
import Cell from './Cell'

interface Props {
  columnTypes: ColumnType
}

const Grid = ({ columnTypes }: Props) => (
  <div className="grid grid-row-3 gap-5">
    {Object.entries(columnTypes).map(([key, columns]) => (
      <Cell key={key} columns={columns} />
    ))}
  </div>
)

export default Grid
