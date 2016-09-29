import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { default as store } from 'store';
import { default as routes } from 'routes';

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('react')
);
