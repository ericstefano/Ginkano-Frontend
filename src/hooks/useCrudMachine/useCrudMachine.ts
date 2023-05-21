import { useReducer } from 'react';
import { initialState, reducer } from './useCrudMachine,reducer';

export const useCrudMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
    idle: () => dispatch({ type: 'idle' }),
    create: (title: string) => dispatch({ type: 'create', title }),
    update: (id: string, title: string) =>
      dispatch({ type: 'update', title, id }),
    remove: (id: string, title: string) =>
      dispatch({ type: 'remove', title, id }),
    isIdle: state.status === 'idle',
    isCreating: state.status === 'create',
    isRemoving: state.status === 'remove',
    isUpdating: state.status === 'update',
  };
};
