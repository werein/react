import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ReduxRouter } from 'redux-router';

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('react')
);
