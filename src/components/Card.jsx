import React from "react";
import '../components/cardStyle.css'
import Cat from "./Cat";
import Header from "./Header";
import Button from "./Button";
import ButtonAllWords from "./ButtonAllWords";
import CardBody from "./CardBody";

const unresolvetWords = [
  {
    name: "cat",
    description: "small animal",
    translate: "Кот"
  },
  {
    name: "dog",
    description: "big animal",
    translate: "Собака"
  },
  {
    name: "bird",
    description: "not animal",
    translate: "Птица"
  }
]

const element = unresolvetWords[0]

function Card() {
    return (
        
              <div>
              <div> <Header/></div>
                <Cat/>
                <CardBody/>
              <div className="buttonsCard">
               <Button name="Не знаю"/>
               <ButtonAllWords/>
               <Button name="Знаю"/></div>
              </div>
            );
          
  }
  
  export default Card;