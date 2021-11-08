import { Fade, Modal, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editField, setEditError } from '../redux/editSlice';
import { setEditClose } from '../redux/modalSlise';
import { editToDo } from '../redux/todoSlice';
import EditErrorAlert from './EditErrorAlert';
import SaveButton from './SaveButton';

const style = {
  position: 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const EditArea = () => {
  const dispatch = useDispatch();
  const editItem = useSelector((state) => state.edit);
  const open = useSelector((state) => state.modal);
  const todos = useSelector((state) => state.todos);

  const saveButtonHandler = () => {
    const filtered = todos.filter((item) => item.id !== editItem.id);
    if (filtered.find((item) => item.text === editItem.text)) {
      dispatch(setEditError(true));
    } else {
      dispatch(editToDo(editItem));
      dispatch(setEditError(false));

      dispatch(setEditClose());
    }
  };

  const editChangeHandle = (event) => {
    dispatch(editField(event.target.value));
  };

  const closeModalHandle = () => {
    dispatch(setEditClose());
    dispatch(setEditError(false));
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open.edit}
      onClose={closeModalHandle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open.edit}>
        <Box sx={style}>
          <EditErrorAlert />
          <TextField
            error={editItem.editError}
            sx={{ width: '100%', marginBottom: '10px' }}
            label="Edit"
            defaultValue={editItem.text}
            onChange={editChangeHandle}
          />
          <SaveButton saveButtonHandler={saveButtonHandler} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditArea;
