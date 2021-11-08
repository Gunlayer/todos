import React, { useCallback, useContext, useReducer } from 'react';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import UserInput from './UserInput';
import AddButton from './AddButton';
import ToDoList from './ToDoList';
import DeletedTodo from './DeletedTodo';
import ErrorAlert from './ErrorAlert';
import { reducer } from '../customRedux/reduser';
import { setStatOpen } from '../redux/modalSlise';
import { StatisticArea } from './StatisticArea';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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
  const reduxDispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const showDeletedHandler = () => {
    if (state.deletedList.length > 0) dispatch({ type: 'toggle' });
  };

  const [state, dispatch] = useReducer(reducer, {
    deletedList: [],
    visible: false,
  });

  const calcStats = useCallback(() => {
    const done = todos.filter((item) => item.complete === true);
    const notdone = todos.filter((item) => item.complete === false);
    const deleted = state.deletedList.length;
    return { done: done.length, notdone: notdone.length, deleted };
  }, [state.deletedList.length, todos]);

  const showStats = () => {
    reduxDispatch(setStatOpen());
  };

  return (
    <>
      <DeleteContext.Provider value={dispatch}>
        <Container maxWidth="xs" sx={containerStyle}>
          <ErrorAlert />
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
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button variant="contained" onClick={showDeletedHandler}>
              Deleted
            </Button>
            <Button variant="contained" onClick={showStats}>
              Statistic
            </Button>
            <StatisticArea calcStats={calcStats} />
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
