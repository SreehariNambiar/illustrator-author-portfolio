import React, { useState } from 'react'
import './OngoingSeries.css'
import Glitch from './Glitch'
import Para from './Para';
import Scroll from './Scroll';
const OngoingSeries = () => {
  const [shows,setShows] = useState(true);
  const [showss,setShowss] = useState(true);
  
  return (
    <section class="stage">
    <div id="homes" className="div diva"><p id="homep" className="pp"><Glitch text="3.Ongoing Series"/></p></div>
    <div className='ghghgh'>
    <ul>
    
    <li><div className="div" id="contactss" onMouseOver={()=>setShows(true)} onMouseOut={()=>setShows(true)}> <a href="#" class="p"><span className='h dss'>3a) <span className='dss'>ANGEL'S CORRUPTED WORLD</span></span>
    
{
  (shows && 
  <div className='dd'>
  
  <Para text2 = "Currently I am in Chapter three of the first Volume" text1="Despite this world being cruel to him all his life. This story shows his struggle to find the truth regarding everything that happened in his life. The organisation was trying to eradicate all evil in the world so that the tenth avatar wont destroy the world. But little did they know that he was among them the whole time." text3="Seinen, Suspense, Action, Dark" className='ll'/>


    <a href="#" class="link">
  <span class="mask">
    <div class="link-container dss">
      <span class="link-title1 title">READ MORE</span>
      <span class="link-title2 title">READ MORE</span>
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
</a>
</div>  </li> 

<li><div className="div" id="contactss" onMouseOver={()=>setShowss(true)} onMouseOut={()=>setShowss(true)}><a href="#" class="p"><span className='h dss'>3b) <span className='dss'>POKEMON LEGACIES</span></span>
{
(showss && 
  <div className='dd'>
  
  <Para text2 = "Currently I am in Chapter three of the first Volume" text1="Despite this world being cruel to him all his life. This story shows his struggle to find the truth regarding everything that happened in his life. The organisation was trying to eradicate all evil in the world so that the tenth avatar wont destroy the world. But little did they know that he was among them the whole time." text3="Seinen, Suspense, Action, Dark" className='ll'/>


    <a href="#" class="link">
  <span class="mask">
    <div class="link-container dss">
      <span class="link-title1 title">READ MORE</span>
      <span class="link-title2 title">READ MORE</span>
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
</a></div></li>





    
    {/* <div class="div" id="contactss"><p class="p">coming soon...</p></div> */}
    </ul>
</div>
    <p class="subtitle"><Scroll/></p>

  </section>
  )
}

export default OngoingSeries