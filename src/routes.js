import React from 'react';
import { Route } from 'react-router';
import App from './containers/app';

export const routes = (
  <Route>
    <Route path="/" component={App} />
  </Route>
);

export default routes;
