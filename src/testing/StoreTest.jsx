import React from "react";
import {useState} from 'react';


function Store() {
    const [state, setState] = useState (() => {
        const save = localStorage.getItem('state');
        return save || ""
    });


    //localStorage.setItem('state', state);
    
    return (
      
      <div>
        <input id="myInput" type="text" name='text' value={state} onChange={(e) => {setState(e.target.value)}}></input>
        <button type='submit' value="Submit" onClick={(e) => localStorage.setItem('state', state)}>Сохранить</button>
      </div>
    );
  }
  
  export default Store;