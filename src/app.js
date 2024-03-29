import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
  } else {
  	store.dispatch(logout());
  }
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/dashboard');
  }
});