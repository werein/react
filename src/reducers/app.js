// @flow

import type { ActionType } from 'actions/index';
import { APP_LOAD } from 'constants/action-types';

export type AppState = {
  loaded: boolean
}

const initialState: AppState = {
  loaded: false
};

export default function app(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}
