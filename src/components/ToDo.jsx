import { Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DeleteButton from './DeleteButton';

const ToDo = ({ todoList }) => {
  const [checked, setChecked] = useState(false);

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
              !checked
                ? { textDecoration: 'none' }
                : { textDecoration: 'line-through' }
            }
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label={todoList.text}
          />
        </FormGroup>
        <DeleteButton id={todoList.id} />
      </Box>
      <Divider />
    </Box>
  );
};

export default ToDo;
