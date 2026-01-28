import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../Tailwind.css"


const show_data = () => {
    
    let [data,setdata]=useState([])

 let fatchData=()=>{
        let api='http://localhost:3000/Hotel'

        axios.get(api).then((res)=>{
            console.log(res.data);
            setdata(res.data)

        }).catch((err)=>{

          console.log(err);
        })
 }

    useEffect(()=>{
  fatchData()
    },[])



  let deletedata=(id)=>{
   let api=`http://localhost:3000/Hotel/${id}`

   axios.delete(api).then(()=>{
   
    alert("Data Delete")
     fatchData()
     
  })
  }


  return (
    <>
    <table className=' border-4 border-double m-8 px-10 py-8'>
  
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Person</th>
            <th>Aadhar</th>
            <th>Delete</th>
          </tr>
        </thead>
   
 
   <tbody>
    {data.map((e)=>(
      

      <tr key={e.id}>
        <td>{e.name}</td>
        <td>{e.city}</td>
        <td>{e.person}</td>
        <td>{e.aadhar}</td>
        <td onClick={()=>{deletedata(e.id)}}>Delete</td>
      </tr>
    ))}
   </tbody>
     </table>
    </>
  )
}

export default show_data
