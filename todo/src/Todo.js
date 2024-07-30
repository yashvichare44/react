import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';

function Todo({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  
  const handleEditChange = (event) => {
  setEditText(event.target.value);
  };
  
  const handleEditSave = () => {
  if (editText.trim() !== '') {
  editTodo(todo.id, editText);
  setEditMode(false);
  }
  };
  
  return (
  <li className={todo.completed ? 'completed' : ''}>
  {editMode ? (
  <div className="edit-container">
  <input
           type="text"
           value={editText}
           onChange={handleEditChange}
           className="edit-input"
         />
  <button className="edit-button" onClick={handleEditSave}>
  Save
  </button>
  </div>
  ) : (
  <div className="todo-container">
  <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => toggleTodo(todo.id)}
  />
  <span className="todo-text">{todo.title}</span>
  <div className="button-container">
  <button className=" action-button delete-button" onClick={() => deleteTodo(todo.id)}>
  <FontAwesomeIcon icon={faTrash} />
  </button>
  <button className=" action-button complete-button" onClick={() => toggleTodo(todo.id)}>
  <FontAwesomeIcon icon={faCheck} />
  </button>
  <button className="action-button edit-button" onClick={() => setEditMode(true)}>
  <FontAwesomeIcon icon={faEdit} />
  </button>
  </div>
  </div>
  )}
  </li>
  );
  }
  
  export default Todo;