// Create final store using all reducers and applying middleware

// Redux utility functions
import { compose, createStore, combineReducers } from 'redux';
// Import all reducers
import * as reducers from 'reducers';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({ ...reducers });

const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk

  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export default store;
