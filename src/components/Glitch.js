import React from 'react'
import './Glitch.css'
const Glitch = ({text}) => {
  return (
    <div>
         <h1 className= "divs" title={text}>{text}</h1>
    </div>
  )
}

export default Glitch