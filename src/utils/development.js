import React from 'react';

export function debugPanel(store) {
  if (__DEV__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}
