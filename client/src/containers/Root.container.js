import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

const RootContainer = ({ store, history, apolloClient }) => (
  <ApolloProvider client={apolloClient} store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>React, Redux, React Apollo Client</h1>
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
