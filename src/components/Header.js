import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Curriculum Aide</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
      <div className="header__links">
        <NavLink className="button button--link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink className="button button--link" to="/create" activeClassName="is-active">Create Lesson</NavLink>
        <NavLink className="button button--link" to="/about-us" activeClassName="is-active">About Us</NavLink>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
