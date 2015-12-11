// Create final store using all reducers and applying middleware

// Redux utility functions
import { compose, createStore, combineReducers } from 'redux';
// Import all reducers
import * as reducers from '../reducers';
// Import routes form routes file
import { routes } from '../routes';
// Import SimpleReduxRouter
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { createHistory } from 'history';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({...reducers, routing: routeReducer});

// Compose reduxReactRouter with other store enhancers
export const history = createHistory();
export const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk

  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

syncReduxAndRouter(history, store);

export default store;
