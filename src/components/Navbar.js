import React,{useState,useEffect} from 'react'
import './Navbar.css'
import Image from './Image';
const Navbar = ({size}) => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [btn,setBtn] = useState(Number(size))
    const [text,setText] = useState('dark')
    const [sh,setSh] = useState(false)
    const [inner,setInner] = useState(window.innerWidth)
    const head = ["#home","#about","#service","#illustration","#contact"]
    const [heads,setHeads] = useState(head[btn])
    useEffect(() => {
      const handleWindow = () => {
          setInner(window.innerWidth)
      }
      window.addEventListener('resize', handleWindow)

      return() => {
          window.removeEventListener('resize',handleWindow);
      }
  })

  const setR = (F) => {
    setBtn(F)
    setHeads(head[F])
}
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  return (
    <nav className='head'>
     <Image/>
     
        <div className = 'left'>
     
    <h1>aidokano</h1>
    <h1>aidokano</h1>
  </div>
          
        <div className='right'>
            <ul className={active}>
                <a className='aa' href={heads} onClick={()=>{setR(0)}}><li className='box' >Home</li></a>
                <a className='aa' href={heads} onClick={()=>{setR(3)}}><li className='box' >Illustrations</li></a>
                <a className='aa' href={heads} onClick={()=>{setR(1)}}><li className='box'>Ongoing series</li></a>
                <a className='aa' href={heads} onClick={()=>{setR(2)}}><li className='box' >Upcoming series</li></a>
                <a className='aa' href={heads} onClick={()=>{setR(4)}}><li className='box'  >Contact Me</li></a>
            </ul>
            <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
        </div>
    </nav>
  )
}

export default Navbar