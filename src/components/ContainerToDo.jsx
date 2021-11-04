import React, { useContext, useReducer } from 'react';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import UserInput from './UserInput';
import AddButton from './AddButton';
import ToDoList from './ToDoList';
import DeletedTodo from './DeletedTodo';
import { reducer } from '../customRedux/reduser';

const containerStyle = {
  marginTop: '100px',
  border: '1px solid black',
  borderRadius: '10px',
  paddingTop: '15px',
  paddingBottom: '20px',
};

export const useCustomDispatch = () => {
  return useContext(DeleteContext);
};

export const DeleteContext = React.createContext();

const ContainerToDo = () => {
  const showDeletedHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const [state, dispatch] = useReducer(reducer, {
    deletedList: [],
    visible: false,
  });

  return (
    <>
      <DeleteContext.Provider value={dispatch}>
        <Container maxWidth="xs" sx={containerStyle}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px',
              marginBottom: '15px',
            }}
          >
            <UserInput />
            <AddButton />
          </Box>
          <ToDoList />
          <Box sx={{ marginTop: '10px' }}>
            <Button variant="contained" onClick={showDeletedHandler}>
              Deleted
            </Button>
          </Box>
        </Container>
        <Container
          maxWidth="xs"
          sx={state.visible ? containerStyle : { display: 'none' }}
        >
          {state.deletedList.map((item) => (
            <DeletedTodo key={item.id} todoItem={item} />
          ))}
        </Container>
      </DeleteContext.Provider>
    </>
  );
};

export default ContainerToDo;
