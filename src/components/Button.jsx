import React from "react";
import '../style/buttonStyle.css'
import {useState} from 'react';




function Button({name, buttonClassName}) {
    const [count, setCount] = useState(0);
   
    
    return (
      
      <div>
        <button onClick={() => setCount(count + 1)} className={"funcButton "+ buttonClassName}>{name} {count}</button>
      </div>
    );
  }
  
  export default Button;