import { IconButton } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import React from 'react';
import { delteItem } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const deleteItemHadle = () => {
    dispatch(delteItem(id));
  };
  return (
    <div>
      <IconButton color="primary" onClick={deleteItemHadle}>
        <HighlightOffOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default DeleteButton;
