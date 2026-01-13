import React, { useState } from 'react'

const Form_1 = () => {

    let[form,setfrom]=useState({
      myname:"",
      myage:"",
      mycity:""
    })
    
    let handlechange=(e)=>{
      setfrom({...form , [e.target.name]:e.target.value})
    }

  return (
    <>
      <h1>From Handling</h1>

      Entre Name: <input type="text" name='myname' value={form.myname} onChange={handlechange} />
      Entre Age: <input type="text" name='myage' value={form.myage} onChange={handlechange} />
      Entre City: <input type="text" name='mycity' value={form.mycity} onChange={handlechange} />

      <h2>My name is {form.myname}  my age is {form.myage} and my city {form.mycity}.</h2>
    </>
  )
}

export default Form_1
