import React from "react";
import '../components/tableStyle.css';
import Header from "./Header";
import EditableTable from "./EditableTable";



const words = [
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
  },
  {
    name: "wall",
    description: "build house",
    translate: "Стена"
  },
  {
    name: "sun",
    description: "important planet",
    translate: "Солнце"
  },
  {
    name: "water",
    description: "for drink",
    translate: "Вода"
  }
]
const columns = [
  { field: 'id', fieldName: '#' },
  { field: 'firstName', fieldName: 'First Name' },
  { field: 'lastName', fieldName: 'Last Name' },
  { field: 'role', fieldName: 'User\'s role' },
];
const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', role: 'Admin' },
  { id: 2, firstName: 'John', lastName: 'Smith', role: 'Editor' }
];

function Table() {
    return (
      <div>
        <div><Header/></div>
        <div className="tableWords">
        <table>
        <tr>
          <th>Name</th>
          <th>description</th>
          <th>translate</th>
        </tr>
        {words.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.description}</td>
              <td>{val.translate}</td>
            </tr>
          )
        })}
      </table>
        </div>
        <EditableTable columns={columns} rows={data} actions />
      </div>
    );
  }
  
  export default Table;