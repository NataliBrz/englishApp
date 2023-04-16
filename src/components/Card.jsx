import React from "react";
import '../components/cardStyle.css'
import Header from "./Header";
import Button from "./Button";
import ButtonAllWords from "./ButtonAllWords";
import CardBody from "./CardBody";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
 


function Card() {
    return (
        
              <div>
              <div> <Header/></div>
                <div className="buttonsBody">
                <ButtonLeft/>
                <div><CardBody/></div>
                <ButtonRight/>
                </div>
              <div className="buttonsCard">
               <Button name="Не знаю" style={{color: 'rgb(120, 157, 120)'}}/>
               <ButtonAllWords/>
               <Button name="Знаю" style={{backgroundColor: 'rgb(120, 157, 120)'}}/></div>
              </div>
            );
          
  }
  
  export default Card;