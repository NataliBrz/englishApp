import React from "react";
import '../components/cardStyle.css'
import Cat from "./Cat";
import Header from "./Header";


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
                  <div className="cardword">{word}</div>
                  <div className="carddescription">{description}</div>
                  <button className="cardButton">Проверить перевод</button>
                </div>
                </div>
               
              </div>
            );
          
  }
  
  export default Card;