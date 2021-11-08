import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'edit',
  initialState: { id: 0, text: '', error: false, editError: false },
  reducers: {
    editField: (state, action) => {
      state.text = action.payload;
    },
    editItemID: (state, action) => {
      state.id = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setEditError: (state, action) => {
      state.editError = action.payload;
    },
  },
});

export const { editField, editItemID, setError, setEditError } =
  editSlice.actions;
export default editSlice.reducer;
