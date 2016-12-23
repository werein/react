import React from 'react';
import { Match } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Layout from 'containers/layout';
import App from 'containers/app';

const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Match exactly pattern="/" component={App} />
    </Layout>
  </ConnectedRouter>
);

export default routes;
