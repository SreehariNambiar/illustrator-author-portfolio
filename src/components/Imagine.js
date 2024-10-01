import React, { useEffect } from 'react'
import angel from './Angel.png'
import ila from './Ila.png'
import moods from './Moods.png'
import angel_1 from './Angel_1.png'
import './Imagine.css'
const Imagine = () => {
// useEffect(() => {
//   document.addEventListener("contextmenu", handlecontexmenu)
//   return()=>{
//     document.removeEventListener("contextmenu", handlecontexmenu)
//   }
// })

// const handlecontexmenu=(e) => {
//   e.preventDefault()
//   console.log("error");
// }

  return (
    <div className='lol'>

    <span></span>
    <img className="imag" src={angel} alt="angel" onContextMenu={(e)=> e.preventDefault()}/>
    <img className="imag" src={angel_1} alt="angel_1" onContextMenu={(e)=> e.preventDefault()}/>
    <img className="imag" src={ila} alt="ila" onContextMenu={(e)=> e.preventDefault()}/>
    <img className="imag" src={moods} alt="moods" onContextMenu={(e)=> e.preventDefault()}/>
    </div>
    
  )
}

export default Imagine