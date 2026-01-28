import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Show_data from './pages/show_data'
import BookingForm from './pages/BookingForm'
const Routing = () => {
  return (
    <>
 
        
        <Routes>
            <Route path='/' element={<Layout/>} >

            <Route index element ={<Home/>} />
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='Show_data' element={<Show_data/>} />
            <Route path='BookingForm' element={<BookingForm/>} />
            <Route path='*' element={<h1>this page in not available</h1>} />

            </Route>
        </Routes>
    </>
  )
}

export default Routing
