import React from 'react'
import { getMessage } from '../lib/locales'

const Title = () => (
  <div className="grid grid-cols-auto grid-flow-col pb-2">
    <div className="text-center text-layout-main uppercase font-bold">
      {getMessage('extName')}
    </div>
  </div>
)

export default Title
