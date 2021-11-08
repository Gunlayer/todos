import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../redux/editSlice';
import { clearUserInput } from '../redux/inputSlice';
import { addItem } from '../redux/todoSlice';

const AddButton = () => {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const todos = useSelector((state) => state.todos);

  const addButtonHandler = () => {
    if (
      !userInput.trim() ||
      todos.find((item) => item.text === userInput.trim())
    ) {
      dispatch(setError(true));
    } else {
      dispatch(addItem(userInput));
      dispatch(clearUserInput());
    }
  };
  return (
    <IconButton
      color="primary"
      sx={{ marginLeft: '15px' }}
      onClick={addButtonHandler}
    >
      <AddCircleOutlineOutlinedIcon />
    </IconButton>
  );
};

export default AddButton;
