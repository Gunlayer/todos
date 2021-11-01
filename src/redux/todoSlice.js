import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({
        id: new Date().getSeconds(),
        text: action.payload,
        complete: false,
      });
    },
    delteItem: (state) => {
      state.pop();
    },
  },
});

export const { addItem, delteItem } = todoSlice.actions;
export default todoSlice.reducer;
