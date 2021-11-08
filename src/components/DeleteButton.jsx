import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { delteItem } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCustomDispatch } from './ContainerToDo';

const DeleteButton = ({ id }) => {
  const contextDispatch = useCustomDispatch();
  const todoList = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const deleteItemHadle = () => {
    const deletedTodo = todoList.findIndex((item) => item.id === id);
    contextDispatch({
      type: 'addDeletedTodo',
      payload: todoList[deletedTodo],
    });
    dispatch(delteItem(id));
  };
  return (
    <div>
      <IconButton color="primary" onClick={deleteItemHadle}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeleteButton;
