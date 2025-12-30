import Navbar from "./navbar"
import { Footer1,Footer2 } from "./Footer"
import logo from './assets/react.svg'
let App=()=>{

  return(

    <div>
      <Navbar/> <br/>
    <h1 style={{color:"royalblue",background:"black"}}>Hello World</h1>
     
     <Footer1/>
     <img src="vite.svg"/>
     <img src={logo} alt="" />
     <Footer2/>
    </div>
  )

}

export default App    
