import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { default as Layout } from 'containers/layout'
import { default as App } from 'containers/app';

export const routes = (
  <BrowserRouter>
    <Layout>
      <Match exactly pattern="/" component={App} />
    </Layout>
  </BrowserRouter>
);

export default routes;
