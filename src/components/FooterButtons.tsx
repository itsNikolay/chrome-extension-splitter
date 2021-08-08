import React from 'react'

const FooterButtons = () => {
  return (
    <div className="grid grid-cols-auto grid-flow-col mt-5 gap-6">
      <div className="text-center">
        <a
          href="https://forms.gle/AVdW2FD1hHC8YMst5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline fill-current hover:text-blue-500 w-12 transition-colors duration-200"
        >
          About
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://forms.gle/AVdW2FD1hHC8YMst5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline fill-current hover:text-blue-500 w-12 transition-colors duration-200"
        >
          Feedback
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://nponomarev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline fill-current hover:text-blue-500 w-12 transition-colors duration-200"
        >
          Donate
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
