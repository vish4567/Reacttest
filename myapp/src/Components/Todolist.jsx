import React, { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  const addTodo = () => {
    if (newTodo !== '') {
      setTodos({ ...todos, newTodo });
     
      setNewTodo('');
    }
  };
  return( 
  <div>
    <h1>Todo app</h1>
    <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>

    <button onClick={addTodo}>Add</button>
    
    <ul>
        {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
        )

        )}
    </ul>
  </div>
  )
};

export default Todolist;
