import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (state.find((item) => item.complete === true)) {
        state.unshift({
          id: new Date().valueOf(),
          text: action.payload,
          complete: false,
        });
      } else {
        state.push({
          id: new Date().valueOf(),
          text: action.payload,
          complete: false,
        });
      }
    },
    delteItem: (state, action) => {
      const selectedTodo = state.findIndex(
        (item) => item.id === action.payload
      );
      state = state.splice(selectedTodo, 1);
    },
    toggle: (state, action) => {
      const selectedTodo = state.findIndex(
        (item) => item.id === action.payload
      );
      state[selectedTodo].complete = !state[selectedTodo].complete;
    },
    editToDo: (state, action) => {
      const selectedTodo = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[selectedTodo].text = action.payload.text;
    },
    sort: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo.complete) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
        state = state.push(todo);
      } else {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
        state = state.unshift(todo);
      }
    },
  },
});

export const { addItem, delteItem, toggle, editToDo, sort } = todoSlice.actions;
export default todoSlice.reducer;
