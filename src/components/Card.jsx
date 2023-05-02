import React from "react";
import '../style/cardStyle.css'
import Header from "./Header";
import Button from "./Button";
import ButtonAllWords from "./ButtonAllWords";
import CardBody from "./CardBody";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
 


function Card(props) {

  return (
        
              <div>
              <div> <Header/></div>
                <div className="buttonsBody">
                <ButtonLeft/>
                <div><CardBody/></div>
                <ButtonRight/>
                </div>
              <div className="buttonsCard">
               <Button name="Не знаю" buttonClassName={'left'}/>
               <ButtonAllWords/>
               <Button name="Знаю" buttonClassName={'right'}/></div>
              </div>
            );
          
  }
  
  export default Card;