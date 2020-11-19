import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import {addLesson} from './actions/lessons';

import uuid from 'uuid';

const store = configureStore();

store.dispatch(addLesson({id: uuid(), title: 'title', description: 'description', resource: 'resource', curriculumLinks: {VCPSCSE073: true, VCPSCSE074: false, VCPSCSE075: false}, rating: 4}));
store.dispatch(addLesson({id: uuid(), title: 'dododo', description: 'momomo', resource: 'axaxax', curriculumLinks: {VCPSCSE073: false, VCPSCSE074: true, VCPSCSE075: false}, rating: 1}));
store.dispatch(addLesson({id: uuid(), title: 'q', description: 'w', resource: 'e', curriculumLinks: {VCPSCSE073: false, VCPSCSE074: true, VCPSCSE075: true}, rating: 3}));

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
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
