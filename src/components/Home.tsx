import React from 'react'
import { COLUMN_TYPES } from '../lib/columnsInfo'
import Grid from './Grid'

const Home = () => {
  return (
    <Grid columnTypes={COLUMN_TYPES} />
  )
}

export default Home
