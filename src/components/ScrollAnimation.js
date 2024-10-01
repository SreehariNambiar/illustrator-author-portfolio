import React from 'react'
import Lottie,{LottieRefCurrentProps} from 'lottie-react'
import animationData from './Mouse-Scroll (2).json'
const ScrollAnimation = () => {
  return (
    <div style={{width:"100vw",position:"fixed", bottom:"0px",display:"flex",justifyContent:"center"}}>
    <Lottie style={{bottom:"0px",height:"100px",width:"100px", color:"#fff"}} animationData={animationData}/>
</div>
  )
}

export default ScrollAnimation