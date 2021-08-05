import React from 'react'
import DonateIcon from './icons/DonateIcon'

const FooterButtons = () => {
  return (
    <div className="grid grid-cols-auto mt-5 justify-end">
      <div className="text-center">
        <a
          href="https://nponomarev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block fill-current hover:text-blue-500 w-12 transition-colors duration-200"
        >
          <DonateIcon />
          <div>Donate</div>
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
