import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';
import logger from 'redux-logger';

const appStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware:()=>{
    return [logger]
  }
});

export default appStore;