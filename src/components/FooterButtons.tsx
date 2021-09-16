import React, { useState } from 'react'
import { getMessage } from '../lib/locales'
import AboutDialog from './AboutDialog'
import AboutIcon from './icons/AboutIcon.tsx'
import DonateIcon from './icons/DonateIcon'
import FeedbackIcon from './icons/FeedbackIcon'

const FooterButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-layout-inactive flex gap-5 items-center justify-around mt-5 p-4">
      <div className="text-center">
        <button onClick={() => setIsOpen(true)} className="block" >
          <div className="flex gap-2 items-center justify-center hover:text-layout-white">
            <AboutIcon />
            <div className="font-bold hover:text-layout-white text-layout-main text-xs transition-colors truncate uppercase">
              {getMessage('About').split(' ')[0]}
            </div>
          </div>
        </button>
        {isOpen && <AboutDialog isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <div className="text-center">
        <a
          href="https://forms.gle/AVdW2FD1hHC8YMst5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center  transition-colors hover:text-layout-white"
        >
          <FeedbackIcon />
          <div className="font-bold hover:text-layout-white text-layout-main text-xs transition-colors truncate uppercase">
            {getMessage('Feedback').split(' ')[0]}
          </div>
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://nponomarev.com/splitter-extension-donate"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center  transition-colors hover:text-layout-white"
        >
          <DonateIcon />
          <div className="font-bold hover:text-layout-white text-layout-main text-xs transition-colors truncate uppercase">
            {getMessage('Donate').split(' ')[0]}
          </div>
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
