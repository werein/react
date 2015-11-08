import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { ReduxRouter } from 'redux-router';

ReactDOM.render(
  <div id="app">
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('react')
);
