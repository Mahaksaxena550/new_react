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

export default PropsChild
