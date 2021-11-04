import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

const DeletedTodo = ({ todoItem }) => {
  return (
    <FormGroup>
      <FormControlLabel
        disabled
        sx={
          !todoItem.complete
            ? { textDecoration: 'none' }
            : { textDecoration: 'line-through' }
        }
        control={<Checkbox checked={todoItem.complete} />}
        label={todoItem.text}
      />
    </FormGroup>
  );
};

export default DeletedTodo;
