type State = {
  id: string;
  status: 'idle' | 'create' | 'update' | 'remove';
  title: string;
};

type Action =
  | { type: 'idle' }
  | { type: 'create'; title: string }
  | { type: 'update'; id: string; title: string }
  | { type: 'remove'; id: string; title: string };

export const initialState: State = { id: '', title: '', status: 'idle' };

export function reducer(_state: State, action: Action): State {
  switch (action.type) {
    case 'idle':
      return initialState;
    case 'create':
      return {
        id: '',
        title: action.title,
        status: action.type,
      };
    case 'update':
      return {
        id: action.id,
        title: action.title,
        status: action.type,
      };
    case 'remove':
      return {
        id: action.id,
        title: action.title,
        status: action.type,
      };
    default:
      throw new Error('Unknown action');
  }
}
