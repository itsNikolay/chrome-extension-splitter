import React, { ReactElement } from 'react'
import FooterButtons from './FooterButtons'
import Navbar from './Navbar'
import Title from './Title'

interface Props {
  children: ReactElement
}

const Layout = ({ children }: Props) => (
  <div className="container mx-auto w-96 p-5 bg-layout-background">
    <Title />
    <Navbar />
    <div className="mt-5 overflow-x-hidden overflow-y-scroll h-80 shadow-inner">
      {children}
    </div>
    <FooterButtons />
  </div>
)

export default Layout
