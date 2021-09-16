import React from 'react'
import { getMessage } from '../lib/locales'

const Title = () => (
  <div className="grid grid-cols-auto grid-flow-col">
    <div className="text-center text-layout-main uppercase font-bold">
      <a
        href="https://chrome.google.com/webstore/detail/splitter-the-window-layou/bipgnkelnldgmmhklakacokihndkcige"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-layout-white transition-colors"
      >
        {getMessage('extName')}
      </a>
    </div>
  </div>
)

export default Title
