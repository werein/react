import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { debugPanel } from './utils/development';
import { ReduxRouter } from 'redux-router';

ReactDOM.render(
  <div id="app">
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
    {debugPanel(store)}
  </div>,
  document.getElementById('react')
);
