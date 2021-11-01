import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlise';
import todoReducer from './todoSlice';
import inputReducer from './inputSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    userInput: inputReducer,
  },
});
