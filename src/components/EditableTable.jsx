import React, { useState, useEffect } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';

/**rowID   row.id
 * 
 * Задаем фукнцию с 4 параметрами, в ней 3 стейта. Первый передает активное или нет состояние редактирования. По умолчанию оно не активно.
 *  Второй позволяет редактировать строку по каждому айдишнику, включая имя, описание и перевод, первоначальное состояние - не найдено.
 * Третий это изменение состояния и сохранение его при выключенном режиме редактирования.
 * Затем пишем функцию, по которой включается режим редактирования. 
 */

const EditableTable = ({ columns, rows, setRowsState, actions }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [editedRow, setEditedRow] = useState();
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  /**
   * функция удаляет строку по айдишнику при нажатии на кнопку
   */
  const handleRemoveRow = (rowID) => {
    console.log('handleRemoveRow')
    const newData = rows.filter(row => {
      return row.id !== rowID ? row : null
    });
    setRowsState(newData);
  }


/**
   * меняет значение в каждом квадратике строки, е таргет - исходное значение. При изменении передаем новое значение как сет стейт и записывание ее во временную переменную
   */
  const handleOnChangeField = (e, rowID) => {
    console.log('handleOnChangeField')
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

  
/**
   * функция отмены редактирования, возвращение как было
   */
  const handleCancelEditing = () => {
    console.log('handleCancelEditing')
        setIsEditMode(false);
    setEditedRow(undefined);
  }

  
/**
   * При совершении редактирования и выключении режима происходит передача данных из массива с учетом тех изменений, которые были внесены
   */
  const handleSaveRowChanges = () => {
    console.log('handleSaveRowChanges')
    setTimeout(() => {
      setIsEditMode(false);
      const newData = rows.map(row => {
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

   const [row, setRow] = useState(() => {
    const row = localStorage.getItem("row");
    const initialValue = JSON.parse(row);
    return initialValue || "";
  });
  
  useEffect(() => {
    localStorage.setItem('row', JSON.stringify(row))
  }, [row])

  const changeState = () => {
    setRow(!setRowIDToEdit)
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
      {rows.map((row) => {
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
              ? <button  onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn' disabled={!editedRow}>
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
      <button onChange={() => changeState()}>123</button>
    </Table>
  );
};
export default EditableTable;