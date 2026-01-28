import React from 'react'
import logo from "../assets/M_logo.png"
import { Link, Outlet } from 'react-router-dom'

const Navbar_h = () => {
  return (
    <>
      <header>
        <nav className="relative flex items-center px-8 py-4 bg-slate-900 text-white shadow-md">

       
          <img 
            src={logo} 
            alt="logo" 
            className="w-12 h-12 object-contain"
          />

         
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-lg font-medium">
            <Link to="/home" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>

            <Link to="/show_data" className="hover:text-blue-400 transition">
              Show_data
            </Link>

            <Link to="/BookingForm" className="hover:text-blue-400 transition">
              Booking Form
            </Link>
          </div>

        </nav>
      </header>

      <Outlet />

      <footer className="bg-slate-900 text-white text-center py-4 mt-10">
        <h3>Here is the Footer</h3>
      </footer>
    </>
  )
}

export default Navbar_h
