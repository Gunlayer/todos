import { TextField } from '@mui/material';

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../redux/editSlice';
import { saveUserInput } from '../redux/inputSlice';

const UserInput = () => {
  const dispatch = useDispatch();
  const userinput = useSelector((state) => state.userInput);
  const todos = useSelector((state) => state.todos);
  const error = useSelector((state) => state.edit);
  const ref = useRef(null);
  useEffect(() => {
    const input = ref.current.getElementsByTagName('input')[0];
    input.focus();
  }, [todos.length]);

  return (
    <TextField
      error={error.error}
      variant="standard"
      ref={ref}
      type="text"
      label="todo"
      helperText="Enter your task"
      sx={{ width: '100%', position: 'relative' }}
      onChange={(event) => {
        dispatch(saveUserInput(event.target.value));
        dispatch(setError(false));
      }}
      value={userinput}
    />
  );
};

export default UserInput;
