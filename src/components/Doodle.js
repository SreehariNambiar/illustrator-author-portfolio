import React, { useEffect, useState } from 'react';
import Scroll from './Scroll';
const Doodle = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const diameter = 18;
    const fadeStart = 0.8;
  useEffect(() => {
    const colorChangeSpeedFactor = 0.1;
    const trailLength = 100;
  

    const getPos = event => {
      return {
        x: event.pageX,
        y: event.pageY
      };
    };

    const handleMouseMove = e => {
      setCursorPos(getPos(e));
    };

    const handleTouchMove = e => {
      setCursorPos(getPos(e.changedTouches[0]));
      e.preventDefault(); // Prevent touch scrolling
    };

    const handleMouseLeave = () => {
      setCursorPos({ x: -1000, y: -1000 });
    };

    const handleMouseClick = () => {
      console.log(JSON.stringify(cursorTrail));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleMouseClick);

    const frame = time => {
      const hue = (time * colorChangeSpeedFactor) % 360;

      const newTrail = [
        ...cursorTrail,
        {
          hue: hue,
          speed: cursorTrail.length <= 1 ? 0 : Math.sqrt(Math.pow(cursorPos.x - cursorTrail[cursorTrail.length - 1].x, 2) + Math.pow(cursorPos.y - cursorTrail[cursorTrail.length - 1].y, 2)),
          x: cursorPos.x,
          y: cursorPos.y
        }
      ];

      if (newTrail.length > trailLength) {
        newTrail.shift();
      }

      setCursorTrail(newTrail);

      window.requestAnimationFrame(frame);
    };

    window.requestAnimationFrame(frame);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleMouseClick);
    };
  }, [cursorTrail, cursorPos]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background:"rgba(0, 0, 197, 0)"}}>
    <h1 style={{color:"#fff", fontWeight:"bold", fontSize:"2vw", marginTop:"15vw"}}>Move mouse to scribble.....</h1>
      {/* Render your cursor trail here */}
      {cursorTrail.map((pos, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: pos.y - diameter / 2,
            left: pos.x - diameter / 2,
            width: diameter,
            height: diameter,
            borderRadius: '50%',
            backgroundColor: `hsl(${pos.hue}, 50%, 50%)`,
            boxShadow: `0 0 ${pos.speed + 1}px ${diameter}px hsla(${pos.hue}, 50%, 50%, ${1 - (index / cursorTrail.length) * fadeStart})`
          }}
        >


        </div>
      ))}
      <p class="subtitle"><Scroll/></p>
    </div>
  );
};

export default Doodle;
