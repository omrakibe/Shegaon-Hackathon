import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './dashBoard/footer/Footer';
import Header from './dashBoard/header/Header';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header /> 
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default Layout