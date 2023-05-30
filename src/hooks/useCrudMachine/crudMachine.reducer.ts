export type CrudMachineState = {
  id: string;
  status: 'idle' | 'creating' | 'updating' | 'removing';
};

type Action =
  | { type: 'idle' }
  | { type: 'creating' }
  | { type: 'updating'; id: string }
  | { type: 'removing'; id: string };

export const initialState: CrudMachineState = { id: '', status: 'idle' };

export function reducer(_state: CrudMachineState, action: Action) {
  switch (action.type) {
    case 'idle':
      return initialState;
    case 'creating':
      return {
        id: '',
        status: action.type,
      };
    case 'updating':
      return {
        id: action.id,
        status: action.type,
      };
    case 'removing':
      return {
        id: action.id,
        status: action.type,
      };
    default:
      throw new Error('Unknown action');
  }
}
