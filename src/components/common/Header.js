import React from 'react';
import {Link, IndexLink} from 'react-router';

const img = require('../../assets/images/logo.png');

const Header = () => {
  return (
    <nav role="navigation" className="navbar navbar-default">
      <div className="navbar-header">
        <Link to="/" className="header-title">
          <img src={img} role="presentation" className="logo-img" /><span>QONFORM</span>
        </Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/rooms" activeClassName="active">Rooms</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
