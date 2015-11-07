import { combineReducers } from 'redux';
import { INDEX } from './actions.js';

const initialState = {
  completed: false,
};

function index(state = initialState, action) {
  switch (action.type) {
    case INDEX:
      setTimeout(function(){
        return { ...state, completed: true };
      }, 1000);
    default:
      return state;
  }
}

export default combineReducers({
  index,
});
