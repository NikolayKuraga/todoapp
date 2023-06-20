import React, { useState } from 'react';
import todoAdd from "./todoAdd.js";

function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	return (
    <div>
      <h1>Todo List</h1>
        <form onSubmit={(e) => todoAdd(e, todos, newTodo, setTodos, setNewTodo)}>
			<input type="text" value={newTodo} onChange={(e) => {setNewTodo(e.target.value);}} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => {setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
	);
}

export default App;
