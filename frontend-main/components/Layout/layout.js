import React from 'react'
import Header from "../Header/layout"
import Footer from "../Footer/layout"

export default function Container({children}) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
