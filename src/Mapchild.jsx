import React from 'react'

const Mapchild = ({mydata}) => {
  return (
    <>
      { 
        mydata.map((e)=>(
            <div key={e.id}>
                <h2>{e.id}</h2>
                <h1>{e.name}</h1>
                <p>{e.price}</p>
            </div>
        ))
      }
    </>
  )
}

export default Mapchild
