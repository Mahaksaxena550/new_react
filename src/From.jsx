import React, { useState } from 'react'

const From = () => {

    let[myname,setname]=useState('')
    let[myage,setage]=useState('')
    let[mycity,setcity]=useState('')

    let handlechange=(event)=>{
        console.log(event);
        console.log(event.target)
        console.log(event.target.value)
        setname(event.target.value)
    }

    let handle1=(event)=>{
        // console.log(event);
        // console.log(event.target)
        // console.log(event.target.value)
        setage(event.target.value)
    }



  return (
    <>
       <h1>Hello From Handling</h1>

       Entre Name:<input type="text" value={myname} onChange={handlechange}/> <br /> <br />
       Entre Age:<input type="text" value={myage} onChange={handle1}/>   <br /> <br />


       Entre City:<input type="text" value={mycity} onChange={(e)=>{setcity(e.target.value)}}/>

       <h3>Hello  <u>{myname}</u> your work Started here </h3>

       <h4>{myage} and {mycity}.</h4> 
    </>
  )
}

export default From
