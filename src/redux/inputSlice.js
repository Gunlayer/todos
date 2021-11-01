import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
  name: 'userInput',
  initialState: '',
  reducers: {
    saveUserInput: (state, action) => {
      return (state = action.payload);
    },
    clearUserInput: (state) => (state = ''),
  },
});

export const { saveUserInput, clearUserInput } = inputSlice.actions;
export default inputSlice.reducer;
