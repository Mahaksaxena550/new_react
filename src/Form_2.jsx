import React from 'react'
import { useState } from 'react'

const Form_2 = () => {

        let[form,setfrom]=useState({
          myname:"",
          myage:"",
          myemail:"",
          mycity:"",
          mycontact:"",
          mystate:""
        })
        
        let handlechange=(e)=>{
          setfrom({...form , [e.target.name]:e.target.value})
        }

    const handlesubmit=(e)=>{
        e.preventDefault()   // if there is an error it will not submite form or refersh page 
        
        let vaild=true
        if(form.myname.trim()==""){
            alert("Please entre Name")
            vaild=false

        }

        else if(form.myage.trim()=="" ){
            alert("please enter contact")
             vaild=false
        }
        else if(isNaN(form.myage)){
            alert("enter age")
             vaild=false
        }

        else if(form.myemail.trim()==""){
            alert("Please entre email")
             vaild=false
        }

        else if(!(form.myemail.includes("@") && form.myemail.includes(".com"))){
             alert("Please entre correct email")
              vaild=false
        }

        else if(form.mycity.trim()==""){
            alert("please entre city")
             vaild=false
        }

        else if(form.mycontact.trim()==""){
            alert("please entre contact")
             vaild=false
        }

        else if(form.mycontact.length!=10){
            alert("please entre contact")
             vaild=false
        }


        else if(form.mystate.trim()==""){
            alert("please entre state")
             vaild=false
        }

        if (vaild){
            alert("form submitted")
             vaild=false
        }

    }


  return (
    <>
     <h1>Form Handleing</h1>

      <form onSubmit={handlesubmit}>
        
      Entre Name: <input type="text" name='myname' value={form.myname} onChange={handlechange} /> <br /> <br />
      Entre Age: <input type="text" name='myage' value={form.myage} onChange={handlechange} />  <br /> <br />
      Entre Email: <input type="text" name='myemail' value={form.myemail} onChange={handlechange} /> <br /> <br />
      Entre City: <input type="text" name='mycity' value={form.mycity} onChange={handlechange} /> <br /> <br />
      Entre Contact: <input type="text" name='mycontact' value={form.mycontact} onChange={handlechange} /> <br /> <br />
      Entre State: <input type="text" name='mystate' value={form.mystate} onChange={handlechange} /> <br /> <br />

      <button type='submit'>Sign-up</button>
      </form>

    </>
  )
}
export default Form_2
