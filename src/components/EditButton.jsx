import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setEditOpen } from '../redux/modalSlise';
import { editField, editItemID } from '../redux/editSlice';

const EditButton = ({ id }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const editButtonClickHandler = () => {
    dispatch(setEditOpen());
    const todoText = todos[todos.findIndex((item) => item.id === id)].text;
    dispatch(editField(todoText));
    dispatch(editItemID(id));
  };

  return (
    <IconButton color="primary" onClick={editButtonClickHandler}>
      <ModeEditIcon />
    </IconButton>
  );
};

export default EditButton;
