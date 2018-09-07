import React from 'react';
import Scrollchor from 'react-scrollchor';
import './menu.scss';
import TweenMax from "gsap/TweenMax";

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.animateClose = this.animateClose.bind(this);

    }

    animateClose(){
        this.props.close();

        TweenMax.to(".menu", 0.2, {
            opacity: 0,
            clearProps:"display"
        });
        TweenMax.staggerTo(".menu__link", 0.25, {
            opacity: 0,
            y: 35,
        }, 0.12);
        TweenMax.staggerTo(".menu-soc__link", 0.25, {
            opacity: 0,
            y: 35,
        }, 0.2);
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
                            <a href="/" className="menu__link">Main</a>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="our-services" className="menu__link"
                                        animate={{duration: 250}}
                                        afterAnimate={this.animateClose}>Our Services</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="our-works" className="menu__link"
                                        animate={{duration: 250}}
                                        afterAnimate={this.animateClose}>Portfolio</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="achievements" className="menu__link"
                                        animate={{duration: 250}}
                                        afterAnimate={this.animateClose}>Team achievements</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="our-mission" className="menu__link"
                                        animate={{duration: 250}}
                                        afterAnimate={this.animateClose}>Our Mission</Scrollchor>
                        </li>
                        <li className="menu__item">
                            <Scrollchor to="contact-us" className="menu__link"
                                        animate={{duration: 250}}
                                        afterAnimate={this.animateClose}>Contact us</Scrollchor>
                        </li>
                    </ul>
                    <ul className="menu-soc row">
                        <li className="menu-soc__item col-xs-4">
                            <a href="https://www.facebook.com/thecoderdev"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-4">
                            <a href="https://www.instagram.com/thecoderdev/"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
                                <span>Instagram</span>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="menu-soc__item col-xs-4">
                            <a href="https://www.linkedin.com/company/the-coder/"
                               className="menu-soc__link" rel="nofollow noopener noreferrer" target="_blank">
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