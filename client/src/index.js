import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RootContainer from './containers/Root.container';
import { apolloClient, configureStore, history } from './store';
import './styles.css';

const store = configureStore();

ReactDOM.render(
  <RootContainer apolloClient={apolloClient} store={store} history={history} />,
  document.getElementById('root'),
);

registerServiceWorker();
