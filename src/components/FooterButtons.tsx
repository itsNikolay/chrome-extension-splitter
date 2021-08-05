
import React from 'react'
import DonateIcon from './icons/DonateIcon'

const FooterButtons = () => {
  return (
    <div className="grid grid-cols-auto mt-5 justify-end">
      <div className="">
        <a
          href="http://nponomarev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block fill-current hover:text-blue-500 w-20"
        >
          <DonateIcon />
        </a>
      </div>
    </div>
  )
}

export default FooterButtons
