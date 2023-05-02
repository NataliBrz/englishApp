import React from "react";
import '../style/headerStyle.css'


function Header() {
    return (
      <div className="headers">
        <div className="container">
        <div className="headers-location">
            <img src='img/header_pict.png' alt="header-cat"/>
            <p className="headers-fonts">Изучай и пей чай</p></div>
        
        </div>
        
      </div>
    );
  }
  
  export default Header;