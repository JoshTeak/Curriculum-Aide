import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AboutUsPage from '../components/AboutUsPage'; 
import AddLessonPage from '../components/AddLessonPage';
import ContactUsPage from '../components/ContactUsPage'; 
import EditLessonPage from '../components/EditLessonPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddLessonPage} />
        <PrivateRoute path="/edit/:id" component={EditLessonPage} />
        <PrivateRoute path="/about-us" component={AboutUsPage} />
        <PrivateRoute path="/contact-us" component={ContactUsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
