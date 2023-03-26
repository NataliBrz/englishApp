import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import Button from './components/Button';
import ButtonAllWords from './components/ButtonAllWords';
import Head from './components/Head';
import { BrowserRouter, Routes, Route, Link
 } from 'react-router-dom';

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
const resolvedWords = [

]

const knownWords = [

]

const element = unresolvetWords[0]

const dataButton = [
  {
    name: 'Не знаю',
    backgroundColor: 'rgb(84, 143, 84)'
  },
  {
    name: 'Оставшиеся карточки',
    backgroundColor: '#c5937790'
  },
  {
    name: 'Знаю',
    backgroundColor: '#c5937790'
  }
]

const style = {backgroundColor: 'red'}

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
      <nav className='navstyle'>
          <Link to="/">Главная</Link>         
          <Link to="/learncard">Изучать карточки слов</Link>         
          <Link to="/words">Таблица слов</Link>
      </nav>
      </header>
      <div>
      <Routes>
        <Route exact path="/learncard" element={<Card/>}/>
        <Route path="/words" element={<Table/>}/>  
        <Route path="/" element={<Head/>}/>
      </Routes>
      </div>
      {/*<div><Header/></div>
      <Cat/>
      <div><Card word={element.name} description={element.description} /></div>
    
      <div className='dataButton'>
       {/*{dataButton.map(
          (element) => {
            return (<Button name={element.name} style={element.backgroundColor} />)
          }
        )}*/}
       {/*} <Button name="Не знаю" className={style} />
        <ButtonAllWords className="button_know" />
        <Button name="Знаю" backgroundColor="#1fe900"/>

      </div>*/}
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
