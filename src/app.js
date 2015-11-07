import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import Example from './components/example.js';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Example completed={false}/>
  </Provider>,
  document.getElementById('react')
);
