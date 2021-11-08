import React, { useContext, useReducer } from 'react';
import { reducer } from './reduser';

const DeleteContext = React.createContext();
const DeleteState = React.createContext();

export const useCustomDispatch = () => {
  return useContext(DeleteContext);
};

export const useDeleteState = () => {
  return useContext(DeleteState);
};

export const DeleteProvider = ({ childred }) => {
  const [state, dispatch] = useReducer(reducer, {
    deletedList: [],
    visible: false,
  });
  return (
    <DeleteContext.Provider value={dispatch}>
      <DeleteState.Provider value={state}> {childred}</DeleteState.Provider>
    </DeleteContext.Provider>
  );
};
