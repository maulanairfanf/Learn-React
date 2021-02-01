import React, { useState } from 'react'
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
 
  return (
    <div className="">
      <h1 className="text-red-50">Hello React {inputText}</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={ todos  } />
    </div>
  );
}

export default App;
