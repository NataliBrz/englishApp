import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';


const EditableTable = ({ columns, rows, actions }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }


  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row.id !== rowID ? row : null
    });
    setRowsState(newData);
  }


  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;
    let row=editedRow;
    if (row === undefined
      ) {
        row = {}
      }
    row['id'] = rowID
    row[fieldName] = value;
    setEditedRow(row)
  }


  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }


  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);
      const newData = rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.Name) row.Name = editedRow.Name;
          if (editedRow.Description) row.Description = editedRow.Description;
          if (editedRow.Translate) row.Translate = editedRow.Translate;
        }
        return row;
      })
      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        {columns.map((column) => {
          return <th key={column.field}>{ column.fieldName }</th>
        })}
      </tr>
      </thead>
      <tbody>
      {rowsState.map((row) => {
        return <tr key={row.id}>
          <td>
            {row.id}
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                defaultValue={editedRow ? editedRow.Name : row.Name}
                id={row.id}
                name='Name'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.Name
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                defaultValue={editedRow ? editedRow.Description : row.Description}
                id={row.id}
                name='Description'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.Description
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
              type='text'
              defaultValue={editedRow ? editedRow.Translate : row.Translate}
              id={row.id}
              name='Translate'
              onChange={ (e) => handleOnChangeField(e, row.id) }
            />
            : row.Translate
            }
          </td>
          {actions &&
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn' disabled={!editedRow}>
                <Save />
              </button>
              : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                <PencilFill />
              </button>
            }
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                <XSquare />
              </button>
              : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                <Trash />
              </button>
            }
          </td>
          }
        </tr>
      })}
      </tbody>
    </Table>
  );
};
export default EditableTable;