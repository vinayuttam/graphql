import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './Home.container';

const RouteNotFound = ({ location }) => (
  <div className="route-not-found">
    <h2>404 - Page Not Found</h2>
  </div>
);

const RootContainer = ({ store, history, apolloClient }) => (
  <ApolloProvider client={apolloClient} store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route component={RouteNotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </ApolloProvider>
);

RootContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
};

export default RootContainer;
