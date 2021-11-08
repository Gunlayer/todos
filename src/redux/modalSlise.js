import { createSlice } from '@reduxjs/toolkit';

export const modalSlise = createSlice({
  name: 'modal',
  initialState: { statistic: false, edit: false },
  reducers: {
    setEditOpen: (state) => {
      state.edit = true;
    },
    setEditClose: (state) => {
      state.edit = false;
    },
    setStatOpen: (state) => {
      state.statistic = true;
    },
    setStatClose: (state) => {
      state.statistic = false;
    },
  },
});

export const { setEditOpen, setEditClose, setStatOpen, setStatClose } =
  modalSlise.actions;
export default modalSlise.reducer;
