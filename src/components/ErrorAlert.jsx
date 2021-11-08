import { Alert, AlertTitle, Collapse } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ErrorAlert = () => {
  const error = useSelector((state) => state.edit);
  return (
    <Collapse in={error.error} sx={{ width: '100%' }}>
      <Alert severity="error">
        <AlertTitle>Empty field or existing task</AlertTitle>
      </Alert>
    </Collapse>
  );
};

export default ErrorAlert;
