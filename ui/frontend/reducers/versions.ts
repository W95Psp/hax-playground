import { Action, ActionType } from '../actions';
import { Version } from '../types';

const DEFAULT: State = {
};

export interface State {
  stable?: Version;
  beta?: Version;
  nightly?: Version;
  rustfmt?: Version;
  clippy?: Version;
  miri?: Version;
  circus?: Version;
}

export default function crates(state = DEFAULT, action: Action) {
  switch (action.type) {
    case ActionType.VersionsLoadSucceeded: {
        const { stable, beta, nightly, rustfmt, clippy, miri, circus } = action;
        return { stable, beta, nightly, rustfmt, clippy, miri, circus };
    }
    default:
      return state;
  }
}
