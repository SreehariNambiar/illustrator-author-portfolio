import React from 'react'
import './Sliding.css'
import Navbar from './Navbar'
import {useEffect, useRef, useState} from 'react'
import Home from './Home'
import Home2 from './Home2'
import UpcomingSeries from './UpcomingSeries'
import OngoingSeries from './OngoingSeries'
import AboutMe from './AboutMe'
import Illustrations from './Illustrations'
import AboutMe2 from './AboutMe2'
import Doodle from './Doodle'

const Sliding = () => {
  let btn=0;
  const head = ["#home","#about","#service","#contact"]
  const [heads,setHeads] = useState(head[btn])
  const setR = (F) => {
    
    setHeads(head[F])
}

  return (
    <div class="container">
    
 <Navbar  size={0}/>

 {/* <Header/> */}

  <section id="home" onDoubleClick={()=>console.log('HELLO')}>
   <Home/>
  </section>
<section>
<Home2/>
</section>
 <section id="illustration" >
      <Illustrations/>
      {/* <ScrollAnimation/> */}
  </section>
  <section>
      <Doodle/>
      
      
  </section>
  
  <section id="about" >
     <OngoingSeries/>
  </section>
  
  <section id="service" >
      <UpcomingSeries/>
      {/* <ScrollAnimation/> */}
  </section>
  <section>
<AboutMe2/>
</section>
  
  <section id="contact">
      <AboutMe/>
      
  </section>

  {/* <ScrollAnimation/> */}
  </div>

  )
}

export default Sliding