import { APP_LOAD } from 'constants/action-types';

const initialState = {
  loaded: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}
