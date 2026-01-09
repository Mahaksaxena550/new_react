import React from 'react'
import "./Tailwind.css"
import Navbar from './H_pages/Navbar_h'
import { Route,Routes } from 'react-router-dom'
import Home from './H_pages/Home'
import Services from './H_pages/Serives'
import Contact from './H_pages/Contact_h'


const Routing_h = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Navbar/>}>

        <Route index element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='*' element={<h1>Error 404 Occur......</h1>}/>


        </Route>
    </Routes>
    </>
  )
}

export default Routing_h
