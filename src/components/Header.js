import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.


export class Header extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
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
            {
              this.props.isAuthenticated ? 
              <button className="button button--link-header" onClick={this.props.startLogout}>Logout</button> :
              <button className="button button--link-header" onClick={this.props.startLogin}>Login</button>
            }
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
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  };
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);