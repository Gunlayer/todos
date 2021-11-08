import { Button } from '@mui/material';
import React from 'react';

const SaveButton = ({ saveButtonHandler }) => {
  return (
    <Button variant="outlined" onClick={saveButtonHandler}>
      Save
    </Button>
  );
};

export default SaveButton;
