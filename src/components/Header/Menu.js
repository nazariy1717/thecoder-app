import React from 'react';
import './menu.scss';


class Menu extends React.Component{


    render() {
        let menuClass = 'menu ';

        if (this.props.show){
            menuClass = 'menu is-open';
        }
        return (
            <div className={menuClass}>
                <div className="menu__content container">
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
                    <ul className="menu-soc row">
                        <li className="menu-soc__item col-lg-4">
                            <a href="/" className="menu-soc__link" rel="nofollow" target="_blank">
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-lg-4">
                            <a href="/" className="menu-soc__link" rel="nofollow" target="_blank">
                                <span>Instagram</span>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-lg-4">
                            <a href="/" className="menu-soc__link" rel="nofollow" target="_blank">
                                <span>Linkedin</span>
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
};

export default Menu;