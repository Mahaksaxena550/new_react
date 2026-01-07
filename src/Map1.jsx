import React from 'react'
import Mapchild from './mapchild'

const Map1 = () => {
          let course=[
        {
            id:1,
            name:'Latop',
            price:700

        },
        {
            id:2,
            name:'Phone',
            price:5655

        },
       {
            id:3,
            name:'Moblie',
            price:1000

        }
    ]

  return (
    <>
  <Mapchild mydata={course}/>
      
    </>
  )
}

export default Map1
