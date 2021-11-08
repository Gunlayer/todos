import { Alert, AlertTitle, Collapse } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const EditErrorAlert = () => {
  const error = useSelector((state) => state.edit);
  return (
    <Collapse in={error.editError} sx={{ width: '100%', mb: '10px' }}>
      <Alert severity="error">
        <AlertTitle>Empty field or existing task</AlertTitle>
      </Alert>
    </Collapse>
  );
};

export default EditErrorAlert;
