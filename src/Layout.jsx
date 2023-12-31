import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
        <Sidebar />
        <Footer />
    </React.Fragment>
  )
}
