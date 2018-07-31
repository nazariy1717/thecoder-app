import React from 'react';


const header = () => (
  <header className="header">
      <div className="header__container container">

          <a href="/" className="header__logo">
              <img src="" alt=""/>
          </a>

          <div className="hamburger">
              <div className="hamburger__content">
                  <div className="hamburger__caption">
                      <span>Menu</span>
                      <span>Open</span>
                  </div>
                  <span className="hamburger__inner">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                  </span>
              </div>
          </div>

      </div>
  </header>
);

export default header;