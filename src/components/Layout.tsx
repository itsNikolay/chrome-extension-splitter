import React, { ReactElement } from 'react'
import FooterButtons from './FooterButtons'
import Navbar from './Navbar'

interface Props {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto w-96 p-5">
      <Navbar />
      <div className="overflow-scroll h-96 shadow-inner">
        {children}
      </div>
      <FooterButtons />
    </div >
  )
}

export default Layout
