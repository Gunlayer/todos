import { Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteButton from './DeleteButton';
import { useDispatch } from 'react-redux';
import { sort, toggle } from '../redux/todoSlice';
import EditButton from './EditButton';
import EditArea from './EditArea';

const ToDo = ({ todoItem }) => {
  const dispatch = useDispatch();

  const checkBoxClickHandle = () => {
    dispatch(toggle(todoItem.id));
    dispatch(sort(todoItem.id));
  };

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
                ? {
                    textDecoration: 'none',
                    '& .MuiFormControlLabel-label': { wordBreak: 'break-word' },
                  }
                : {
                    textDecoration: 'line-through',
                    '& .MuiFormControlLabel-label': { wordBreak: 'break-word' },
                  }
            }
            control={<Checkbox onChange={checkBoxClickHandle} />}
            label={todoItem.text}
          />
        </FormGroup>

        <Box sx={{ display: 'flex' }}>
          <EditButton id={todoItem.id} />
          <DeleteButton id={todoItem.id} />
        </Box>

        <EditArea />
      </Box>
      <Divider />
    </Box>
  );
};

export default ToDo;
