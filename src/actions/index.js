// @flow

import type {
  LoadApp
} from './app';

export type ActionType = LoadApp;

export type Dispatch = (action: ActionType) => void;
