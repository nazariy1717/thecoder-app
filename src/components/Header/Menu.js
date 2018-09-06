import React from 'react';
import Scrollchor from 'react-scrollchor';
import './menu.scss';

class Menu extends React.Component{

    constructor(props){
        super(props);
    }

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
                            <Scrollchor to="" className="menu__link" onClick={this.props.close}>Main</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <a to="our-services" className="menu__link" onClick={this.props.close}>Our Services</a>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="our-works" className="menu__link" onClick={this.props.close}>Portfolio</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="achievements" className="menu__link" onClick={this.props.close}>Team achievements</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="our-mission" className="menu__link" onClick={this.props.close}>Our Mission</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="contact-us" className="menu__link" onClick={this.props.close}>Contact us</Scrollchor>
                        </li>
                    </ul>
                    <ul className="menu-soc row">
                        <li className="menu-soc__item col-xs-4">
                            <a href="/" className="menu-soc__link" rel="nofollow" target="_blank">
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-4">
                            <a href="/" className="menu-soc__link" rel="nofollow" target="_blank">
                                <span>Instagram</span>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-4">
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