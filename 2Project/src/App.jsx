import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  //Adding a todo
  const addTodo = () => {
    setTodos([{ id: Date.now(), text: newTodo, completed: false }, ...todos]);
    setNewTodo("");
  };

  //Toggle Complete
  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //Toggle all
  const toggleAllTodos = () => {
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
  };

  //Delete todo
  const removeTodo = (id) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
  };

  //filter the todos
  const filterTodos = (filter) => {
    setFilter(filter);
  };

  //filtered items
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "incomplete") {
      return todo.completed;
    } else if (filter === "complete") {
      return !todo.completed;
    }
  });
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => filterTodos("all")}>Show all</button>
      <button onClick={() => filterTodos("complete")}>Show complete</button>
      <button onClick={() => filterTodos("incomplete")}>Show incomplete</button>
      <button onClick={toggleAllTodos}>Toggle all</button>
      <ul>
        {filteredTodos.map((todo, id) => (
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
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
