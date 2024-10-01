import React from 'react'
import './Para.css'
const Para = ({text1,text2,text3}) => {
  return (
    <div className='para'>
    <h2>Progress till now :</h2>
    <p>{text2}</p>
    <span><h2>Genres : </h2>
    <p>{text3}</p></span>
    <h2>Summary :</h2>
        <p >{text1}</p>
    </div>
  )
}

export default Para