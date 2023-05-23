import { useReducer } from 'react';
import { initialState, reducer } from './useCrudMachine,reducer';

export const useCrudMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
    dispatchIdle: () => dispatch({ type: 'idle' }),
    dispatchCreate: (title: string) => dispatch({ type: 'create', title }),
    dispatchUpdate: (id: string, title: string) =>
      dispatch({ type: 'update', title, id }),
    dispatchRemove: (id: string, title: string) =>
      dispatch({ type: 'remove', title, id }),
    isIdle: state.status === 'idle',
    isCreating: state.status === 'create',
    isRemoving: state.status === 'remove',
    isUpdating: state.status === 'update',
  };
};
