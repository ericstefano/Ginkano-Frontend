import { useReducer } from 'react';
import { initialState, reducer } from './crudMachine.reducer';

export const useCrudMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
    dispatchIdle: () => dispatch({ type: 'idle' }),
    dispatchCreate: () => dispatch({ type: 'creating' }),
    dispatchUpdate: (id: string) => dispatch({ type: 'updating', id }),
    dispatchRemove: (id: string) => dispatch({ type: 'removing', id }),
    isIdle: state.status === 'idle',
    isCreating: state.status === 'creating',
    isRemoving: state.status === 'removing',
    isUpdating: state.status === 'updating',
  };
};
