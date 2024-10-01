import React from 'react'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <section className='bodys'>
   <form class="form" action='https://formsubmit.co/ebf994249977da19fe50b8ebecf44547' method='POST' autocomplete="off">
   {/* HoneyPot */}
   <input type='text' name='_honey' style={{"display":"none"}}/>
   {/* Diable Captcha */}
   <input type='hidden' name='_captcha' value='false'/>
  <div class="form-inner">

    <h2 className='h22' style={{"color":"#bb005a"}}>Get in touch</h2>
    <h3 className='h23' style={{"color":"#bb005a"}}>Want to give a feedback, or want to publish my works?</h3>
    <div className='top-section'>
    <div class="input-wrapper">
      <label for="login-username">Your name</label>
      <div class="input-group"><span class="icons">
          <svg viewBox="0 0 24 24">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
          </svg></span>
        <input className='inputs' type="text" name='name' placeholder="aidokano" data-lpignore="true" required/>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="login-password">Your email</label>
      <div class="input-group"><span class="icons">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clip-rule="evenodd" />
</svg>
</span>
        <input className='inputs' type="text" name='email' id="login-password" data-lpignore="true" placeholder="aidokano99@gmail.com" required/>
      </div>
    </div>
    </div>
    <div className='group'>
      <label for='message'>Message</label>
      <textarea placeholder="What do you think about my stories..." name='comments,&nbs;questions' id='message'></textarea>
    </div>
    <div class="btn-group">
    {/* <span class="icons">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
</svg>
</span> */}
<input type='submit' value='send' class="btn btn--primary"/>
    </div>
  </div>
</form>
    </section>
  )
}

export default AboutMe