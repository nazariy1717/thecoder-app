import React from 'react';
import logo from './logo-coder.png';

const header = () => (
  <header className="header">
      <div className="header__container container">

          <a href="/" className="header__logo">
              <img src={logo} alt="coder logo" className="image"/>
          </a>

          <div className="hamburger">
              <div className="hamburger__content">
                  <div className="hamburger__caption">
                      <span>Menu</span>
                      <span>Open</span>
                  </div>
                  <span className="hamburger__inner">
                      <i>
                        <span></span>
                        <span></span>
                      </i>
                       <i>
                        <span></span>
                        <span></span>
                      </i>
                       <i>
                        <span></span>
                        <span></span>
                      </i>
                       <i>
                        <span></span>
                        <span></span>
                      </i>
                  </span>
              </div>
          </div>

      </div>
  </header>
);

export default header;