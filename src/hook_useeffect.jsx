import React, { useEffect, useState } from 'react'

const hook_useeffect = () => {

    const [count,setcount]=useState(0)

    let Inc=()=>{
        console.log(count)
     setcount(count+1)
    }

    useEffect(()=>{

        console.log("Running....")
    },[])
  return (
    <>
      <button onClick={Inc}>Increment</button>
    </>
  )
}

export default hook_useeffect
