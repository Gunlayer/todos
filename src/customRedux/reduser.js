export const reducer = (state, action) => {
  switch (action.type) {
    case 'addDeletedTodo':
      return { ...state, deletedList: [...state.deletedList, action.payload] };

    case 'toggle':
      return { ...state, visible: !state.visible };

    default:
      return state;
  }
};
