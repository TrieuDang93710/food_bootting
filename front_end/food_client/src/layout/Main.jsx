import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../App.css'
import Footer from '../components/Footer'

function Main() {
  return (
    <div className='bg-primaryBG'>
      <NavBar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main