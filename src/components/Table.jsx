import React from "react";
import '../style/tableStyle.css';
import Header from "./Header";
import EditableTable from "./EditableTable";
import Store from '../testing/StoreTest';
import { useState, useEffect } from "react";

const columns = [
  { field: 'id', fieldName: '#' },
  { field: 'Name', fieldName: 'Name' },
  { field: 'Description', fieldName: 'Description' },
  { field: 'Translate', fieldName: 'Translate' },
];
const data = [
  { id: 1, Name: 'Cat', Description: 'Small animal', Translate: 'Кот' },
  { id: 2, Name: 'Dog', Description: 'Big animal', Translate: 'Собака' },
  { id: 3, Name: 'Bird', Description: 'Fly in sky', Translate: 'Птица' },
  { id: 4, Name: 'Sun', Description: 'Important planet', Translate: 'Солнце' },
  { id: 5, Name: 'Water', Description: 'For drink', Translate: 'Вода' },
  { id: 6, Name: 'words6', Description: 'Description6', Translate: 'Translate6' },
  { id: 7, Name: 'words7', Description: 'Description7', Translate: 'Translate7' },
  { id: 8, Name: 'words8', Description: 'Description8', Translate: 'Translate8' },
  { id: 9, Name: 'words9', Description: 'Description9', Translate: 'Translate9' },
  { id: 10, Name: 'words10', Description: 'Description10', Translate: 'Translate10' }
];



function Table() {
  const [words, setWords] = useState(() => {
    const row = localStorage.getItem("row");
    const initialValue = JSON.parse(row);
    return initialValue || data;
  });


  useEffect(() => {
    localStorage.setItem('row', JSON.stringify(words))
  }, [words])
  

    return (
      <div>
        <div><Header/></div>
        <div className="tableWords">
        
        
        <EditableTable columns={columns} rows={words} actions setRowsState={setWords}/>
        </div>
        <Store/>
      </div>
    );
  }
  
  export default Table;