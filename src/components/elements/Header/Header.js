import React from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import { TweenMax }  from "gsap";
import { HashLink as Link } from 'react-router-hash-link';
import {NavLink} from 'react-router-dom';

import './header.scss';
import logo from './logo-head.svg';
import logo_white from './logo-head-white.svg';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.toggleHamburger = this.toggleHamburger.bind(this);
        this.animateOpen = this.animateOpen.bind(this);
        this.animateClose = this.animateClose.bind(this);
    }

    state = {
        isHamburgerActive: false
    };

    componentDidMount(){
        this.animateClose();
    }

    animateOpen(){
        TweenMax.to(".menu", 0.3, {opacity: 1, display:'block' });
        TweenMax.staggerTo(".menu__link", 0.25, {
            opacity: 1,
            y: 0,
            delay: 0.25,
        }, 0.12);
        TweenMax.staggerTo(".menu-soc__link", 0.25, {
            opacity: 1,
            y: 0,
            delay: 0.75,
        }, 0.2);
    }

    animateClose(){
        TweenMax.to(".menu", 0.3, {
            opacity: 0,
            delay: 0.5,
            clearProps: "display"
        });
        TweenMax.staggerTo(".menu__link", 0.25, {
            opacity: 0,
            y: 35,
        }, 0.12);
        TweenMax.staggerTo(".menu-soc__link", 0.25, {
            opacity: 0,
            y: 35,
            delay: 0.35,
        }, 0.2);
    }

    toggleHamburger = () => {
        this.setState(
            (prevState) => {
                return {
                    isHamburgerActive: !prevState.isHamburgerActive
                };
            },() => {
                if(this.state.isHamburgerActive){
                    this.animateOpen();
                } else {
                    this.animateClose();
                }
            });
    };

    render() {
        let headerClass = 'header';
        if (this.state.isHamburgerActive){
            headerClass = 'header --white';
        }
        return (
            <div className="coder-head">
                <header className={headerClass} >
                    <div className="header__container container">
                        <div className="header__row row m-row align-justify align-middle">
                            <div className="column">
                                <a href="/" className="header__logo" aria-label="THE CODER logo">
                                    <img src={logo} alt="the coder logo" title="the coder logo" className="image"/>
                                    <img src={logo_white} alt="the coder logo" title="the coder logo" className="image"/>
                                    <svg viewBox="2 8.2 45.7 62.3">
                                        <g>
                                            <path fill="#000" stroke="#000" strokeWidth="4.252" strokeMiterlimit="10" d="M39.5,16.4c3.7,3.7,6,8.8,6,14.4
                                    c0,5.6-2.3,10.7-6,14.4c-3.7,3.7-8.8,6-14.4,6s-10.7-2.3-14.4-6c-3.7-3.7-6-8.8-6-14.4c0-5.6,2.3-10.7,6-14.4c3.7-3.7,8.8-6,14.4-6
                                    S35.8,12.7,39.5,16.4z M36,41.8c2.9-2.9,4.5-6.8,4.5-10.9c0-4.1-1.6-8-4.5-10.9s-6.8-4.5-10.9-4.5s-8,1.6-10.9,4.5
                                    s-4.5,6.8-4.5,10.9c0,4.1,1.6,8,4.5,10.9s6.8,4.5,10.9,4.5S33,44.7,36,41.8z"/>
                                            <path fill="#000" stroke="#000" strokeWidth="4.252" strokeMiterlimit="10" d="M42.9,67.5c0,0.5-0.5,0.9-1,0.9L25,62.3
                                    L8.2,68.4c-0.6,0-1-0.4-1-0.9V56.7c0-0.5,0.5-0.9,1-0.9L25,62.3l16.8-6.6c0.6,0,1,0.4,1,0.9C42.9,56.7,42.9,67.5,42.9,67.5z"/>
                                        </g>
                                    </svg>
                                    <svg viewBox="2 8.2 45.7 62.3">
                                        <g>
                                            <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4.252" strokeMiterlimit="10" d="M39.5,16.4c3.7,3.7,6,8.8,6,14.4
                                    c0,5.6-2.3,10.7-6,14.4c-3.7,3.7-8.8,6-14.4,6s-10.7-2.3-14.4-6c-3.7-3.7-6-8.8-6-14.4c0-5.6,2.3-10.7,6-14.4c3.7-3.7,8.8-6,14.4-6
                                    S35.8,12.7,39.5,16.4z M36,41.8c2.9-2.9,4.5-6.8,4.5-10.9c0-4.1-1.6-8-4.5-10.9s-6.8-4.5-10.9-4.5s-8,1.6-10.9,4.5
                                    s-4.5,6.8-4.5,10.9c0,4.1,1.6,8,4.5,10.9s6.8,4.5,10.9,4.5S33,44.7,36,41.8z"/>
                                            <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4.252" strokeMiterlimit="10" d="M42.9,67.5c0,0.5-0.5,0.9-1,0.9L25,62.3
                                    L8.2,68.4c-0.6,0-1-0.4-1-0.9V56.7c0-0.5,0.5-0.9,1-0.9L25,62.3l16.8-6.6c0.6,0,1,0.4,1,0.9C42.9,56.7,42.9,67.5,42.9,67.5z"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div className="column">
                                <ul className="header__list">
                                    <li className="header__list-item">
                                        <Link to="/#our-services" className="header__list-link">
                                            <span>Our Services</span>
                                            <span>Our Services</span>
                                        </Link>
                                    </li>
                                    <li className="header__list-item">
                                        <Link to="/#our-works" className="header__list-link">
                                            <span>Portfolio</span>
                                            <span>Portfolio</span>
                                        </Link>
                                    </li>
                                    <li className="header__list-item">
                                        <Link to="/#achievements" className="header__list-link">
                                            <span>Team experience</span>
                                            <span>Team experience</span>
                                        </Link>
                                    </li>
                                    <li className="header__list-item">
                                        <Link to="/#testimonials" className="header__list-link">
                                            <span>Testimonials</span>
                                            <span>Testimonials</span>
                                        </Link>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink to="/blog" className="header__list-link" activeClassName="active">
                                            <span>Blog</span>
                                            <span>Blog</span>
                                        </NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <NavLink to="/tools" className="header__list-link" activeClassName="active">
                                            <span>Tools</span>
                                            <span>Tools</span>
                                        </NavLink>
                                    </li>
                                    <li className="header__list-item">
                                        <Link to="/#get-started" className="header__list-link">
                                            <span>Contact Us</span>
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Hamburger click={this.toggleHamburger} show={this.state.isHamburgerActive}/>
                    </div>
                </header>
                <Menu show={this.state.isHamburgerActive} close={this.toggleHamburger}/>
            </div>
        )
    }
}


export default Header;