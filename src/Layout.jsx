import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <header>
        <h1>LoGO</h1>
        <nav>
            <Link to='/home'>Home</Link>  <br />
            <Link to='/about'>About</Link> <br />
            <Link to='/contact'>Contact</Link> <br />
        </nav>
      </header>
      
      <Outlet/>

      <footer>
      <h2>  Hey Mahak Saxena </h2>
      </footer>
    </>
  )
}

export default Layout
