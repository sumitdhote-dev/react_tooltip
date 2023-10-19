import React, { useState } from 'react';
import {useValue} from "../ButtonContext"


export default function Hover() {
  const [isHovered, setIsHovered] = useState(false);
  const [topV,setTopV]=useState(-100);
  const [leftV,setLeftV]=useState(50);
  const [tran,setTran]=useState("translateY(-50%)");
  const [widthV,setWidthV]=useState("20px");
  const {pos}=useValue();


  //==============================Handling Hover==================
  const handleHover = () => {
    setIsHovered(true);
    if(pos==="Top"){
      setTopV(-100);
      setLeftV(0);
      setTran("translateY(-50%)");
      setWidthV("20px")
    }else if(pos==="Bottom"){
      setTopV(100);
      setLeftV(0);
      setTran("translateY(50%)");
      setWidthV("20px")
    }else if(pos==="Left"){
      setTopV(30);
      setLeftV(-130);
      setTran("translateY(50%)");
      setWidthV("20px")
    }else if(pos==="Right"){
      setTopV(0);
      setLeftV(110);
      setTran("translateY(0%)");
      setWidthV("20vw")
    }
  };
//===============Handle UnHover============================
  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div
    
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <h1>Hover over me!</h1>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: `${topV}%`,
            left: `${leftV}%`,
            transform: {tran},
            background: 'black',
            padding: '10px',
            border: '1px solid gray',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            width:{widthV},
            color:"white",
            fontWeight:"bold",

          }}
        >
          It's My Pleasure! that you Hover over me.
        </div>
      )}
    </div>
  );
}
