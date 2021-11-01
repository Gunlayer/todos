import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserInput } from '../redux/inputSlice';
import { addItem } from '../redux/todoSlice';

const AddButton = () => {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const todolist = useSelector((state) => state.todos);

  const addButtonHandler = () => {
    if (userInput.trim()) {
      dispatch(addItem(userInput));
      dispatch(clearUserInput());
    }
  };
  return (
    <Button>
      <AddCircleOutlineOutlinedIcon onClick={addButtonHandler} />
    </Button>
  );
};

export default AddButton;
