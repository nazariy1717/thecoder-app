import React from 'react';
import './hamburger.scss';

const Hamburger = props => {

    let hamburgerClass = 'hamburger';

    if (props.show){
        hamburgerClass = 'hamburger is-open';
    }



    return (
        <div className={hamburgerClass} onClick={props.click}>
            <div className="hamburger__content">
                <div className="hamburger__caption">
                    <span>Menu</span>
                    <span>Open</span>
                    <span>Close</span>
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
    )

};

export default Hamburger;