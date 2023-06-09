import { useReducer } from 'react';
import { initialState, reducer } from './groupMachine.reducer';

export const useGroupMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
    dispatchIdle: () => dispatch({ status: 'idle' }),
    dispatchCreate: () => dispatch({ status: 'creating' }),
    dispatchUpdate: (id: string) => dispatch({ status: 'updating', id }),
    dispatchRemove: (id: string) => dispatch({ status: 'removing', id }),
    dispatchSharing: (id: string) => dispatch({ status: 'sharing', id }),
    isIdle: state.status === 'idle',
    isCreating: state.status === 'creating',
    isRemoving: state.status === 'removing',
    isUpdating: state.status === 'updating',
    isSharing: state.status === 'sharing',
  };
};
