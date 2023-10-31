import { Action, ActionType } from '../../actions';
import { finish, start } from './sharedStateManagement';

const DEFAULT: State = {
  requestsInProgress: 0,
};

interface State {
    requestsInProgress: number;
    code?: string;
    stdout?: string;
    stderr?: string;
    error?: string;
}

export default function circus(state = DEFAULT, action: Action) {
  switch (action.type) {
    case ActionType.RequestCircus:
      return start(DEFAULT, state);
      case ActionType.CircusSucceeded: {
      const { stdout = '', stderr = '' } = action;
      return finish(state, { stdout, stderr });
    }
    case ActionType.CircusFailed:
      return finish(state, { error: action.error });
    default:
      return state;
  }
}
