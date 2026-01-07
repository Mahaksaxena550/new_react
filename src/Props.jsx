import React from 'react'
import { PropsChild } from './PropsChild'
import { PropsChild1 } from './PropsChild'
const Props = () => {
  return (
    <div>

      <h1>"Hello World"</h1>
      <PropsChild myname="Mahak" myage="26"/>



      <div style={{display:"flex"}}>
      <PropsChild1 myimg ="/vite.svg" myprice='800' clothes='Shirt'/> 
      <PropsChild1 myimg ="/vite.svg" myprice='999' clothes='T-Shirt'/> 
      <PropsChild1 myimg ="/m.jpg" myprice='2000' clothes='Card'/> 
     </div>




    </div>
  )
}
// rafce
export default Props



