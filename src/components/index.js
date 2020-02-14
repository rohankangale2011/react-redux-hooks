import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TodoInput from './TodoInput/todoInput';
import TodoList from './TodoList/todoList';
import './mainapp.css';

const mapUseSelector = (state) => ({
  todoList: state.todoList
});

export default () => {
  const { todoList } = useSelector(state => mapUseSelector(state));
  const dispatch = useDispatch();
  const onAddTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  }
  return (
    <div className="main-app">
      <TodoInput addTodo={onAddTodo} />
      <TodoList data={todoList} />
    </div>
  );
}
