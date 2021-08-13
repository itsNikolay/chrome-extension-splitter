import React, { useState } from 'react'
import AboutDialog from './AboutDialog'

const FooterButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid grid-cols-3 grid-flow-col mt-5 gap-6">
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block fill-current hover:text-blue-500 transition-colors duration-200"
        >
          About
        </button>
        {isOpen && <AboutDialog isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <div className="text-center">
        <a
          href="https://forms.gle/AVdW2FD1hHC8YMst5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline fill-current hover:text-blue-500 transition-colors duration-200"
        >
          Feedback
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://nponomarev.com/splitter-extension-donate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline fill-current hover:text-blue-500 transition-colors duration-200"
        >
          {'♥ Donate'}
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
