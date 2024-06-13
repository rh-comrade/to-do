import {init} from '../init'
const todoReducer = (state = init, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;