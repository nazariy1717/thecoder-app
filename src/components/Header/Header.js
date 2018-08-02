import React from 'react';
import logo from './logo-coder.png';
import Hamburger from './Hamburger';
import './header.scss';

const Header = () => (
  <header className="header">
      <div className="header__container container">

          <a href="/" className="header__logo">
              <img src={logo} alt="coder logo" className="image"/>
          </a>

          <Hamburger />

      </div>
  </header>
);

export default Header;