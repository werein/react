// @flow

import { APP_LOAD } from 'constants/action-types';

export type LoadApp = {
  type: 'APP_LOAD'
}

export function loadApp(): LoadApp {
  return {
    type: APP_LOAD,
  };
}

export default { loadApp };
