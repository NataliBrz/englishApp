import React from "react";
import '../components/cardStyle.css'


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

function CardBody() {
    return (
        
              <div>
             
                <div  className="bodyCard">
                <div className="wordsLocation">
                  <div className="round">
                    <input type="checkbox" id="cat" className="checkbox"/>
                    <label for="cat" className="check_agree">выключить котика</label>
                  </div>
                  <div className="cardword">{element.name}</div>
                  <div className="carddescription">{element.description}</div>
                  <button className="cardButton">Проверить перевод</button>

                </div>
                </div>
                
              </div>
            );
          
  }
  
  export default CardBody;