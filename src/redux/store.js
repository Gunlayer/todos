import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import inputReducer from './inputSlice';
import modalReduser from './modalSlise';
import editReduser from './editSlice';
export default configureStore({
  reducer: {
    todos: todoReducer,
    userInput: inputReducer,
    modal: modalReduser,
    edit: editReduser,
  },
});
