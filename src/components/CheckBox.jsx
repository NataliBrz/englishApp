import React from "react";
import '../style/CheckBoxStyle.css'




function CheckBox (props) {
    
    return (
      
      <div>
        <div className="round">
                    <input type={"checkbox"} id="cat" className="checkbox" onChange={props.toggleIsCat}/>
                    <label htmlFor="cat" className="check_agree">выключить котика</label>
                  </div>
      </div>
    );
  }
  
  export default CheckBox;