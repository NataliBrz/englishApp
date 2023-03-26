import React from "react";
import '../components/headerStyle.css'
import catCup from '../assets/pictures/header_pict.png'


function Header() {
    return (
      <div className="headers">
        <div className="container">
        <div className="headers-location">
            <img src={catCup} alt="header-cat"/>
            <p className="headers-fonts">Изучай и пей чай</p></div>
        
        </div>
        
      </div>
    );
  }
  
  export default Header;