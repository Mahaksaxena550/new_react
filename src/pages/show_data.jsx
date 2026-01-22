import React, { useEffect } from 'react'
import axios from 'axios'

const show_data = () => {
    
    useEffect(()=>{
        let api='http://localhost:3000/Hotel'

        axios.get(api).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
          console.log(err);
        })
    },[])
  return (
    <>
      
    </>
  )
}

export default show_data
