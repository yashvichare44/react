import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to mark a todo as completed
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to remove a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to edit a todo
  const editTodo = (id, newTitle) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
    
      <header className="App-header">
        To-Do List
      </header>
      <div>
        <Form input={input} setInput={setInput} addTodo={addTodo} />
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
