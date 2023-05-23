import React from "react";
import '../style/cardStyle.css'
import Header from "./Header";
import Button from "./Button";
import ButtonAllWords from "./ButtonAllWords";
import CardBody from "./CardBody";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import { useState } from "react";




function Card(props) {

  const [currentIndex, setCurrentIndex] = useState();
  //const [words, setWords] = useState(unresolvetWords);


  return (
        
              <div>
              <div> <Header/></div>
                <div className="buttonsBody">
                <ButtonLeft/>
                <div><CardBody/></div>
                <ButtonRight/>
                </div>
              <div className="buttonsCard">
               <Button name="Не знаю" buttonClassName={'left'} onClick = { () => setCurrentIndex() }/>
               <ButtonAllWords/>
               <Button name="Знаю" buttonClassName={'right'}/></div>
              </div>
            );
          
  }
  
  export default Card;