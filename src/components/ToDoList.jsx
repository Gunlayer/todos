import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import ToDo from './ToDo';

const ToDoList = () => {
  const todoList = useSelector((state) => state.todos);
  return (
    <Box sx={{ width: '100%' }}>
      {todoList.map((item) => (
        <ToDo key={item.id} todoList={item} />
      ))}
    </Box>
  );
};

export default ToDoList;
