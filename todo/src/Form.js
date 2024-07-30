import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

function Form({ input, setInput, addTodo }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') return; // Prevent adding empty todos
    const newTodo = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    addTodo(newTodo);
    setInput('');
  };

  return (
    <form className='Form-info' onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Enter task'
        value={input}
        required
        onChange={onInputChange}
      />
      <button className='button-add'>Add</button>
    </form>
  );
}

export default Form;
