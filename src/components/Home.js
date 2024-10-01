import React from 'react'
import './Home.css'
import Scroll from './Scroll'
import Galaxy from './Galaxy'
import Insta from './Insta'
const Home = () => {
  return (
    <section>
  
 
     <h1 className='lll' data-shadow='"not-a-portfolio:)"'></h1>
      <div className='homes'>
      <h2 className='h1x h'>1.Introduction</h2>
          <h2 className='h1 h'>Hi I am 'aidokano'...</h2>
          <h2 className='h2 h'>An illustrator,</h2>
          <h2 className='h3 h'>author,</h2>
          <h2 className='h4 h'>aspiring mangaka...</h2>
          <h2 className='h5 h'>I like to write stories, and in future publish a manga or a lightnovel...</h2>
          <h2 className='h6 h'>Infact I am writing my story right now...</h2>
         
          </div>
          <div className='imagss'>
            <Insta/>
          </div>
<p class="subtitle"><Scroll/></p>



    </section>
  )
}

export default Home