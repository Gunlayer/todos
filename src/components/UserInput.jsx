import { TextField } from '@mui/material';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserInput } from '../redux/inputSlice';

const UserInput = () => {
  const dispatch = useDispatch();
  const userinput = useSelector((state) => state.userInput);

  return (
    <TextField
      error={false}
      variant="standard"
      type="text"
      label="todo"
      helperText="Enter your task"
      sx={{ width: '100%' }}
      onChange={(event) => dispatch(saveUserInput(event.target.value))}
      value={userinput}
    />
  );
};

export default UserInput;
