// @flow

import type { Dispatch } from 'actions/index';
import type { AppState } from './app';

export { default as app } from './app';

export type State = {
  app: AppState
};

export type Store = {
  dispatch: Dispatch,
  getState: () => State,
  subscribe: (listener: () => void) => () => void
};

export default {};
