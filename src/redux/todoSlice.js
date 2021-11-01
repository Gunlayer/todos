import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({
        id: new Date().valueOf(),
        text: action.payload,
        complete: false,
      });
    },
    delteItem: (state, action) => {
      const selectedTodo = state.findIndex(
        (item) => item.id === action.payload
      );
      state = state.splice(selectedTodo, 1);
    },
  },
});

export const { addItem, delteItem } = todoSlice.actions;
export default todoSlice.reducer;
