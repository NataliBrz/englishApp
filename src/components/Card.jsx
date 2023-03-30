import React from "react";
import '../components/cardStyle.css'
import Cat from "./Cat";
import Header from "./Header";
import Button from "./Button";
import ButtonAllWords from "./ButtonAllWords";

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
function Card({ word, description }) {
    return (
        
              <div>
              <div> <Header/></div>
                 <div>
                  <Cat/>
                </div>
                <div  className="bodyCard">
                <div className="wordsLocation">
                  <div className="round">
                    <input type="checkbox" id="cat" className="checkbox"/>
                    <label for="cat" className="check_agree">выключить котика</label>
                  </div>
                  <div className="cardword">{unresolvetWords.name}</div>
                  <div className="carddescription">{description}</div>
                  <button className="cardButton">Проверить перевод</button>

                </div>
                </div>
                <div className="buttonsCard">
               <Button/>
               <ButtonAllWords/>
               <Button/></div>
              </div>
            );
          
  }
  
  export default Card;