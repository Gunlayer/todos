import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import UserInput from './UserInput';
import AddButton from './AddButton';
import ToDoList from './ToDoList';

const ContainerToDo = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: '100px',
        border: '1px solid black',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <UserInput />
        <AddButton />
      </Box>
      <ToDoList />
    </Container>
  );
};

export default ContainerToDo;