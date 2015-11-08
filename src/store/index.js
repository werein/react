// Create final store using all reducers and applying middleware

// Redux utility functions
import { compose, createStore, combineReducers } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// Import all reducers
import * as reducers from '../reducers';
// Import routes form routes file
import { routes } from '../routes';
// Import ReduxRouter
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { createHistory } from 'history';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({...reducers, router: routerStateReducer});

// Compose reduxReactRouter with other store enhancers
export const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  reduxReactRouter({
    routes,
    createHistory
  }),
  // Provides support for DevTools:
  devTools()
)(createStore)(reducer);

export default store;
