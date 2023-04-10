import React from "react";
import '../components/cardStyle.css';
import Cat from "./Cat";
import CheckBox from "./CheckBox";


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

const {name} = this.props;

onClick = (name, e) => {
  this.setState({name : name});

}

    return (
        
              <div>
             
                <div  className="bodyCard">
                <div className="wordsLocation">
                  
                  <div className="cardword">{unresolvetWords[0].name}</div>
                  <div className="carddescription">{unresolvetWords[0].description}</div>
                  <button className="cardButton" onClick={(e)=>this.onClick(name, e)}>Проверить перевод</button>
                  {
                    this.state.name &&
                    <p>изучено {this.state.name}</p>
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