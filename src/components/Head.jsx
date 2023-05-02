import React from "react";
import '../style/headStyle.css'
import Header from "./Header";



function Head() {
    return (
      <div>
        <div><Header/></div>
        <div className="headBody">
          <h1>Уникальное приложение для изучения английского языка</h1>
          <h2>Изучение в 2 этапа:</h2>
          <p>-работай с таблицей, редактируй слова и запоминай их</p>
          <p>-проверяй себя в интерактивной игре</p>
          <h2>И, конечно, не забудь чашечку ароматного чая)</h2>
        </div>
      </div>
    );
  }
  
  export default Head;