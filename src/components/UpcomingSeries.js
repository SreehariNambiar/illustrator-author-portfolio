import React from 'react'
import './UpcomingSeries.css'
import {useState} from 'react'
import Para from './Para'
import Scroll from './Scroll'
const UpcomingSeries = () => {
  const [shows,setShows] = useState(true);
  return (
   <section className="stages">
    <a href="#" class="cutlink hh" data-content="4.Upcoming Series">
  <span class="cutlink-inner">4.Upcoming Series</span>
</a>
<a href="#"><span class="cutlink hover-3" onMouseOver={()=>setShows(true)} onMouseOut={()=>setShows(true)}><span className='dsss'>4.a) THE GIRL THAT MADE ME DREAM</span>
{
  (shows && 
    <div className='dd'>
    <Para text1="Kazuya is now a famous actor in the showbiz. But he is not fully happy because his childhood friend Katsumi was the one who helped him reach here reach this impossible dream. His journey to find his friend and the strange encounters to reach their is the plot of this oneshot." text2="Still not yet started" text3="Shonen, Suspense"/>    
    <a href="#" class="link">
  <span class="mask">
    <div class="link-container dsss">
      <span class="link-title1 title">Coming soon</span>
      <span class="link-title2 title">Coming soon</span>
    </div>
  </span>
  <div class="link-icon">
    <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
    <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
  </div>
</a>
</div>
  )
}


</span>
</a>
 


 <p class="subtitle"><Scroll/></p>
   </section>
  )
}

export default UpcomingSeries