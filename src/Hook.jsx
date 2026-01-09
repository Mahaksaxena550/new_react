import React from 'react'
import { useState } from 'react'



const Hook = () => {

    let[ count,setcount ]=useState(0)

let Inc=()=>{
    setcount(count+1)
}

let Dec=()=>{
    if (count>=1){
        setcount(count-1)

        // how to disable & reset button
    }
}

let Reset=()=>{
    if (count>=1){
        setcount(count=0)
    }

}


console.log(count)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Inc}>Increment</button> <br /> <br />
      <button onClick={Dec} disabled={count==0}>Decrement</button> <br /> <br />
      <button onClick={Reset}>Reset</button>
    </>
  )

}

export default Hook
