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
      {children}
      <FooterButtons />
    </div >
  )
}

export default Layout
