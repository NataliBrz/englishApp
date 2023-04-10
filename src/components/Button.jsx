import React from "react";
import '../components/buttonStyle.css';
import {useState} from 'react';




function Button({name}) {
    const [count, setCount] = useState(0);
   
    
    return (
      
      <div>
        <button onClick={() => setCount(count + 1)} className="funcButton">{name} {count}</button>
      </div>
    );
  }
  
  export default Button;