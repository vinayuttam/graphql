import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Auth from '../auth';
import HomeContainer from './Home.container';
import LoginContainer from './Login.container';
import DashboardContainer from './Dashboard.container';

const RouteNotFound = ({ location }) => (
  <div className="route-not-found">
    <h2>404 - Page Not Found</h2>
  </div>
);

// Clean-up PrivateRoute and LoginRoute later on
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      Auth.loggedIn() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  );
};

const LoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      Auth.loggedIn() ? (
        <Redirect to={{
          pathname: '/dashboard',
          state: { from: props.location }
        }}/>
      ) : (
        <Component {...props}/>
      )
    )}/>
  );
};

const RootContainer = ({ store, history, apolloClient }) => (
  <ApolloProvider client={apolloClient} store={store}>
    <ConnectedRouter history={history}>
      <div id="main-app-container">
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <LoginRoute path="/login" component={LoginContainer} />
          <PrivateRoute path="/dashboard" component={DashboardContainer} />
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
