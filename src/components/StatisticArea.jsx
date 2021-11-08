import { Button, Fade, Modal, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatClose } from '../redux/modalSlise';

const style = {
  position: 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 2,
};

export const StatisticArea = ({ calcStats }) => {
  const open = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModalHandle = () => {
    dispatch(setStatClose());
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open.statistic}
      onClose={closeModalHandle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open.statistic}>
        <Box sx={style}>
          <Typography>Task to be done: {calcStats().notdone}</Typography>
          <Typography>Done:{calcStats().done}</Typography>
          <Typography>Deleted: {calcStats().deleted}</Typography>
          <Button
            variant="contained"
            sx={{ marginTop: '15px' }}
            onClick={closeModalHandle}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
