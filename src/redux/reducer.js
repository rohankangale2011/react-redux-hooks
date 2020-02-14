const initialState = {
  todoList: []
}

function reducer(state = initialState, {type, payload}) {
  switch(type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, payload]
      }
    default:
      return state;
  }
}

export default reducer;