import React from 'react';
import './hamburger.scss';

const hamburger = () => (

    <div className="app.hamburger">
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

);

export default hamburger;