import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
                            <Link to="/" className="menu__link" onClick={this.props.close}>Main</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/#our-services" className="menu__link" onClick={this.props.close}>Our Services</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/#our-works" className="menu__link" onClick={this.props.close}>Portfolio</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/blog" className="menu__link" onClick={this.props.close}>Blog</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/#achievements" className="menu__link" onClick={this.props.close}>Team achievements</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/#our-mission" className="menu__link" onClick={this.props.close}>Mission Statement</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/#contact-us" className="menu__link" onClick={this.props.close}>Contact us</Link>
                        </li>
                    </ul>
                    <ul className="menu-soc row">
                        <li className="menu-soc__item col-xs-3">
                            <a href="https://www.facebook.com/thecoderdev"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-3">
                            <a href="https://www.instagram.com/thecoderdev/"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Instagram</span>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-3">
                            <a href="https://www.linkedin.com/company/the-coder/"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Linkedin</span>
                                <span>Linkedin</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-3">
                            <a href="https://www.behance.net/thecoderdev"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Behance</span>
                                <span>Behance</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
};

export default Menu;