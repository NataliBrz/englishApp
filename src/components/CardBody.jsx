import React from "react";
import '../components/cardStyle.css';
import Cat from "./Cat";
import CheckBox from "./CheckBox";
import { useRef, useEffect } from "react";





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


const CardBody = (props) => {
const [isCat, setIsCat] = React.useState(true);

const toggleIsCat = () => {
  setIsCat(!isCat)
}

const {name} = props;

const [state, setState] = React.useState({
  value: 'не изучено слов',
  setValue: {name},
});

const onClick = (name, e) => {
  setState({name:name});

}

const buttonLearn = useRef(null);

  useEffect(() => {
    if (buttonLearn.current) {
      buttonLearn.current.focus();
    }
  }, []);

    return (
        
              <div>
             
                <div  className="bodyCard">
                <div className="wordsLocation">
                  
                  <div className="cardword">{unresolvetWords[0].name}</div>
                  <div className="carddescription">{unresolvetWords[0].description}</div>
                  <button className="cardButton" onClick={(e)=>onClick(name, e)} ref={buttonLearn}>Проверить перевод</button>
                  
                  
                  {
                    state.name &&
                    <p>изучено {state.name}</p>
                  }
                  <CheckBox toggleIsCat={toggleIsCat}/>
                  {
                    isCat && <Cat/>
                  }

                </div>
                </div>
                
              </div>
            );
          
  }
  
  export default CardBody;