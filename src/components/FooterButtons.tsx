import React, { useState } from 'react'
import { getMessage } from '../lib/locales'
import AboutDialog from './AboutDialog'
import AboutIcon from './icons/AboutIcon.tsx'
import DonateIcon from './icons/DonateIcon'
import FeedbackIcon from './icons/FeedbackIcon'

const FooterButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-layout-inactive flex gap-5 items-center justify-center mt-5 py-4">
      <div className="text-center">
        <button onClick={() => setIsOpen(true)} className="block" >
          <div className="flex gap-2 items-center justify-center hover:text-layout-white">
            <AboutIcon />
            <div className="text-layout-main uppercase font-bold text-sm transition-colors hover:text-layout-white">
              {getMessage('About')}
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
          <div className="text-layout-main uppercase font-bold text-sm  transition-colors hover:text-layout-white">
            {getMessage('Feedback')}
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
          <div className="text-layout-main uppercase font-bold text-sm  transition-colors hover:text-layout-white">
            {getMessage('Donate')}
          </div>
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
