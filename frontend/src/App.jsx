import { useState } from 'react'
import './App.css'
import React from 'react'
// import RoutesPage from './routers/RoutesPage'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
 

  return (
    <>
      <div>
     <Navbar/>
     <div className='min-h-screen'>
     <Outlet />
     </div>
      
      <Footer/>
      </div>

    </>
  )
}

export default App
