import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import Layout from 'containers/layout';
import App from 'containers/app';

const routes = (
  <BrowserRouter>
    <Layout>
      <Match exactly pattern="/" component={App} />
    </Layout>
  </BrowserRouter>
);

export default routes;
