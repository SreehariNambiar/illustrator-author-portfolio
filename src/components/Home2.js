import React from 'react'
import './Home2.css'
import Moon from './Moon'
import Scroll from './Scroll'
import Galaxy from './Galaxy'
import Eclipse from './Eclipse'
const Home2 = () => {
  return (
    <section className='body'>

    <Moon/>
    {/* <Eclipse/> */}
  
<h1 className='lls' data-shadow='just a blog'>"just a window to my scribbles"</h1>
<p class="subtitle"><Scroll/></p>

</section>
  )
}

export default Home2