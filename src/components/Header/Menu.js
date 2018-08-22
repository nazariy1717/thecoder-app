import React from 'react';
import './menu.scss';


const Menu = props => {


    let menuClass = 'menu';

    if (props.show){
        menuClass = 'menu is-open';
    }


    return (
        <div className={menuClass} >
            <div className="menu__content">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="/" className="menu__link">Main</a>
                    </li>
                    <li className="menu__item">
                        <a href="/" className="menu__link">Our Services</a>
                    </li>
                    <li className="menu__item">
                        <a href="/" className="menu__link">Portfolio</a>
                    </li>
                    <li className="menu__item">
                        <a href="/" className="menu__link">Team achievements</a>
                    </li>
                    <li className="menu__item">
                        <a href="/" className="menu__link">Our Mission</a>
                    </li>
                    <li className="menu__item">
                        <a href="/" className="menu__link">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>

    )
};

export default Menu;