import React from 'react'
import './Scroll.css'
const Scroll = () => {
  return (
    <div>
    <svg>
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="name"/>
        <feColorMatrix in="name" mode="matrix" values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 5 -10" result="b"/>

        <feBlend in="SourceGraphic" in2="b" />
      </filter>
    </defs>
  </svg>

  <div class="wrapper">
    <div id="container">
      <p class="text">Scroll</p>
      <div class="drop"></div>
    </div>
  </div></div>
  )
}

export default Scroll