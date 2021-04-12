import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title selectable" onClick={() => {
          if(history.location.pathname !== "/dashboard")
          {
            history.push({
              pathname: "/dashboard",
              state: { previousPath: history.location}
            });
          }
        }}>Curriculum Us</h1>
        <button className="button button--link-header" onClick={startLogout}>Logout</button>
      </div>
      <div className="header__links">
        <button className="button button--link-header" onClick={() => {
          if(history.location.pathname !== "/dashboard")
          {
            history.push({
              pathname: "/dashboard",
              state: { previousPath: history.location}
            });
          }
        }}>Lesson Plans</button>
        <button className="button button--link-header" onClick={() => {
          if(history.location.pathname !== "/create")
          {
            history.push({
              pathname: "/create",
              state: { previousPath: history.location}
            });
          }
        }}>Create Lesson</button>
        <button className="button button--link-header" onClick={() => {
          if(history.location.pathname !== "/about-us")
          {
            history.push({
              pathname: "/about-us",
              state: { previousPath: history.location}
            });
          }
        }}>About Us</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
