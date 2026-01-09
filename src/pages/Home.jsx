import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate=useNavigate()

  let okk=()=>{
    navigate('/contact')
  }
  return (
    <>
      <h1>hello from Home</h1>
      <button onClick={okk}>Go to contact page </button>
    </>
  )
}

export default Home
