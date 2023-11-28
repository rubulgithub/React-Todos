// TodoList.js
import React from "react";
import useFormInput from "./useFormInput.js";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const newTodoInput = useFormInput();

  const addTodo = () => {
    if (newTodoInput.value.trim() !== "") {
      setTodos([
        {
          id: Date.now(),
          text: newTodoInput.value,
          completed: false,
        },
        ...todos,
      ]);
    }
    newTodoInput.onChange({ target: { value: "" } });

    // Add the new todo to the todos array
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" {...newTodoInput} placeholder="New Todo" />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => completeTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
