import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="content-container">
      <div className="footer__links">
        <NavLink className="button button--link" to="/about-us" activeClassName="is-active" exact={true}>About Us</NavLink>
        <NavLink className="button button--link" to="/contact-us" activeClassName="is-active">Contact Us</NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;