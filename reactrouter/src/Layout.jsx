
// can do all this work in App.jsx
// I need header and footer constant other things should be dynamic
// router-dom gives Outlet

import React from 'react'
import Header from './componrnts/Header/Header'
import Footer from './componrnts/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout