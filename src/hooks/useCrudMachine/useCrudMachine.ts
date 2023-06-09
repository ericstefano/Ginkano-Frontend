import { useReducer } from 'react';
import { initialState, reducer } from './crudMachine.reducer';

export const useCrudMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
    dispatchIdle: () => dispatch({ status: 'idle' }),
    dispatchCreate: () => dispatch({ status: 'creating' }),
    dispatchUpdate: (id: string) => dispatch({ status: 'updating', id }),
    dispatchRemove: (id: string) => dispatch({ status: 'removing', id }),
    isIdle: state.status === 'idle',
    isCreating: state.status === 'creating',
    isRemoving: state.status === 'removing',
    isUpdating: state.status === 'updating',
  };
};
