// Create final store using all reducers and applying middleware

// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
// Import all reducers
import * as reducers from 'reducers';
// Import SimpleReduxRouter
import { syncHistory, routeReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({ ...reducers, routing: routeReducer });
const reduxRouterMiddleware = syncHistory(browserHistory);

export const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
  applyMiddleware(reduxRouterMiddleware),

  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

export default store;
