import React from 'react'
import insta from './insta.webp'
import watt from './watt.webp'
import './Insta.css'
const Insta = () => {
  return (
    <div>
    <img className="imags" src={insta} alt="angel" onContextMenu={(e)=> e.preventDefault()}/>
    <span className='er'> | </span>
    <img className="imags" src={watt} alt="angel" onContextMenu={(e)=> e.preventDefault()}/>
    </div>
  )
}

export default Insta