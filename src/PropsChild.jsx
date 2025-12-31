import React from 'react'

// const PropsChild = (props) => {
  
const PropsChild = ({myname,myage}) => {
    // console.log(props);
    

    // let {myname,myage}=props // Destructuring

  return (
    <div>
      {/* <h1>My name is {props.myname}</h1>
      <h1>My age is {props.myage}</h1> */}

      <h1>My name {myname} and my age is {myage}</h1>
    </div>
  )
}

export  {PropsChild}




const PropsChild1=(props)=>{

  return(
    
    <div>
    <div id='card'>
      
      <img src={props.myimg} alt="" width="100%" height="200px"/>
      <p>Price {props.myprice}</p>
      <p> {props.clothes}</p>
      <button>buy</button>
    </div>

    </div>
  )
}

export {PropsChild1}