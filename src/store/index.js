// Create final store using all reducers and applying middleware

// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// Import all reducers
import * as reducers from '../reducers';

// Combine reducers into one
const reducer = combineReducers(reducers);

// Create final store
const finalCreateStore = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

// Export as store
export const store = finalCreateStore(reducer);

export default store;
