import React, {useState} from 'react';

export default ({addTodo}) => {
  const [todoItem, setTodoItem] = useState('');

  const inputText = (evt) => {
    setTodoItem(evt.target.value);
  }

  const add = (evt) => {
    evt.preventDefault();
    if (!todoItem) return;
    addTodo({
      id: Math.random(),
      value: todoItem
    });
    setTodoItem('');
  }

  return (
    <form onSubmit={add}>
      <input onChange={inputText} value={todoItem} />
      <button onClick={add}>Add</button>
    </form>
  )
}