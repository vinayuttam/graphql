import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as router } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);
const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
const apolloClient = new ApolloClient({ networkInterface });
const configureStore = preloadedState => createStore(
  combineReducers({
    router,
    apollo: apolloClient.reducer(),
  }),
  preloadedState,
  compose(
    applyMiddleware(middleware, thunk, apolloClient.middleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);

export { history, apolloClient, configureStore };
