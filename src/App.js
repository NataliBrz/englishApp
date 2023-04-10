import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import Head from './components/Head';
import { BrowserRouter, Routes, Route, Link
 } from 'react-router-dom';



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
    </div>
    </BrowserRouter>
  );
}

export default App;
