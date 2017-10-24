// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import routes from './routes';

const root = document.getElementById('react');

if (root) {
  render(
    <Provider store={store}>{routes}</Provider>,
    root
  );
}
