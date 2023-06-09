export type CrudMachineState = {
  id: string;
  status: 'idle' | 'creating' | 'updating' | 'removing';
};

type Action =
  | { status: 'idle' }
  | { status: 'creating' }
  | { status: 'updating'; id: string }
  | { status: 'removing'; id: string };

export const initialState: CrudMachineState = { id: '', status: 'idle' };

export function reducer(_state: CrudMachineState, action: Action) {
  switch (action.status) {
    case 'idle':
      return initialState;
    case 'creating':
      return {
        id: '',
        status: action.status,
      };
    case 'updating':
      return {
        id: action.id,
        status: action.status,
      };
    case 'removing':
      return {
        id: action.id,
        status: action.status,
      };
    default:
      throw new Error('Unknown action');
  }
}
