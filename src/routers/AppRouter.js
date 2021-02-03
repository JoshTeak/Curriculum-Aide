import React from 'react';
import { Router, Route, Switch, Link, NavLink, useLocation } from 'react-router-dom';
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
import Header from '../components/Header';
import Footer from '../components/Footer';

import { TransitionGroup, CSSTransition } from "react-transition-group";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <Route path="*">
        <Header />
        <Page />
        <Footer />
      </Route>
    </Switch>
  </Router>
);

export const Page = () => {
  let location = useLocation();

  return (
    <TransitionGroup class="transition">
      <CSSTransition
        key={location.key}
        classNames="page-change"
        timeout={500}
        onEnter={(e) => {
          let enteringDirection = Direction('ENTER');
          e.style.transform = `translate(${enteringDirection}%)`
        }}
        onEntering={(e) => {
          e.style.transform = "translate(0%)"
        }}
        onExiting={(e) => {
          let exitingDirection = Direction('EXIT');
          e.style.transform = `translate(${exitingDirection}%)`
        }}
      >
        <Switch location={location}>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/create" component={AddLessonPage} />
          <PrivateRoute path="/edit/:id" component={EditLessonPage} />
          <PrivateRoute path="/about-us" component={AboutUsPage} />
          <PrivateRoute path="/contact-us" component={ContactUsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export const Direction = (dir) => {
  const newPathValue = LocationValue(history.location.pathname);
  const oldPathValue = LocationValue(history.location.state.previousPath.pathname);
  if((newPathValue > oldPathValue && dir === 'ENTER') || (newPathValue < oldPathValue && dir === 'EXIT')) {
    return 100;
  } else {
    return -100;
  } 
}

export const LocationValue = (path) => {
  let pathValue;
  switch (path) {
    case '/dashboard':
      return 0;
    case '/create':
      return 1;
    case '/about-us':
      return 2;
    case '/contact-us':
      return 3;
    default:
      return 10;
  }
}

export default AppRouter;
