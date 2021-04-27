import React from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.

export class Footer extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <footer className="footer">
        <div className="content-container">
          <div className="footer__links">
          	<button className="button button--link-footer" onClick={() => {
              if(history.location.pathname !== "/about-us")
              {
                history.push({
                  pathname: "/about-us",
                  state: { previousPath: history.location}
                });
              }
            }}>About Us</button>
            <button className="button button--link-footer" onClick={() => {
              if(history.location.pathname !== "/contact-us")
              {
                history.push({
                  pathname: "/contact-us",
                  state: { previousPath: history.location}
                });
              }
            }}>Contact Us</button>
          </div>
        </div>
      </footer>
    );
  };
}

export default Footer;