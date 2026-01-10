import React, { use, useState } from 'react'

const Hook_1 = () => {

    let[dark,setdark]=useState(false)
    let[show,setshow]=useState(false)
    
  return (
    <>
      <h1 style={{backgroundColor: dark?"green":"red",color:dark?"blue":"yellow"}}>{dark?"Dark mode":"Light Mode"}</h1>
      <button style={{backgroundColor: dark?"gray":"aqua"}} onClick={()=>{setdark(!dark)}}>{dark?"Hide":"Show"}</button>

      {show && (<h1> Hello</h1>)} <br /> <br />
      <button style={{backgroundColor: show?"gray":"aqua"}} onClick={()=>{setshow(!show)}}>{show?"Hide":"Show"}</button>
    </>
  )
}

export default Hook_1
