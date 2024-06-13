'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/reducers/todoAction'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control W-100"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <h3>output</h3>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;