import { Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteButton from './DeleteButton';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/todoSlice';

const ToDo = ({ todoItem }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FormGroup>
          <FormControlLabel
            sx={
              !todoItem.complete
                ? { textDecoration: 'none' }
                : { textDecoration: 'line-through' }
            }
            control={
              <Checkbox onChange={() => dispatch(toggle(todoItem.id))} />
            }
            label={todoItem.text}
          />
        </FormGroup>
        <DeleteButton id={todoItem.id} />
      </Box>
      <Divider />
    </Box>
  );
};

export default ToDo;
