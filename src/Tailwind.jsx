import React from 'react'
import "./Tailwind.css"


// const Tailwind=()=>{

//     return(
//         // <div className='w-40 flex justify-center items-center  border-amber-200 border-4  rounded-2xl'>
//         //     <h1 className='bg-amber-950 text-amber-50'>Tailwind css</h1>
//         //     <p>MAHAK SAXENA</p>
//         //     <button className='bg-cyan-500 shadow-cyan-500/50'>Click</button>


//         // </div>
        
    
//     <div>
//         <div className=' bg-[url(/m.jpg)]' >
           

//         </div>

//         <div class="title">
//             <h6>4 days ago</h6>
//             <h1>Post One</h1>

//         </div>

//         <div class="des">

//             <p>Mountains are prominent landforms that rise significantly above their surroundings, typically featuring steep slopes and a distinct summit or peak. They are much taller and steeper than hills.</p>
//             <button>Read more...</button>
//         </div>

//     </div>



//     )

// }
// export default Tailwind



const Tailwind=()=>{
     
    let mahak=()=>{
        alert("Dwonloaded here")

       
      
    }

 let fruite =["Apple","Mango","Banana","Grapes"]
    return(

        
        <>

      <header className='w-full border h-20 flex justify-between items-center bg-blue-200 mask-b-from-20% mask-b-to-80%'>
         
         <h1>LOGO</h1>
        <nav>
            <ul  className='hidden sm:block md:flex gap-4 italic text-shadow-lg/30'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </nav>
            <button className='border p-2 rounded hover:bg-amber-600 text-shadow-lg/30' onClick={mahak}>Download</button>
      </header>



       <ul>
       {
         
        fruite.map((e,i)=>(
           
                <li key={i}>{e}</li>
           

        ))
       
       }
         </ul>

       <br />

        <h1>sm = 640px - 768px tablet
            md = 768px - 1024 laptop
            lg = 1024 - 1300 px 
        </h1>
       </>
    )

}
export default Tailwind
