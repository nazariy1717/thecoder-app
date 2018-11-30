import React from 'react';
import {HashLink as Link } from 'react-router-hash-link';
import {NavLink} from 'react-router-dom';

import './footer.scss';

const footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row m-row">
                <div className="column col-lg-3 col-md-3 col-sm-2 col-xs-12 footer__column">
                    <a href="/" className="footer__logo" aria-label="THE CODER logo">
                        <svg viewBox="2.3 8.3 45.4 62.4">
                            <g>
                                <path stroke="#000000" strokeWidth="4.252" strokeMiterlimit="10" d="M39.5,16.4c3.7,3.7,6,8.8,6,14.4c0,5.6-2.3,10.7-6,14.4
                                    c-3.7,3.7-8.8,6-14.4,6s-10.7-2.3-14.4-6c-3.7-3.7-6-8.8-6-14.4c0-5.6,2.3-10.7,6-14.4c3.7-3.7,8.8-6,14.4-6S35.8,12.7,39.5,16.4z
                                    M36,41.8c2.9-2.9,4.5-6.8,4.5-10.9c0-4.1-1.6-8-4.5-10.9s-6.8-4.5-10.9-4.5s-8,1.6-10.9,4.5s-4.5,6.8-4.5,10.9
                                    c0,4.1,1.6,8,4.5,10.9s6.8,4.5,10.9,4.5S33,44.7,36,41.8z"/>
                                <path id="logo-path" stroke="#000000" strokeWidth="4.252" strokeMiterlimit="10" d="M42.9,67.5c0,0.5-0.5,0.9-1,0.9L25,62.3L8.2,68.4
                                c-0.6,0-1-0.4-1-0.9V56.7c0-0.5,0.5-0.9,1-0.9L25,62.3l16.8-6.6c0.6,0,1,0.4,1,0.9C42.9,56.7,42.9,67.5,42.9,67.5z"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div className="column col-lg-9 col-md-9 col-sm-10 col-xs-12 footer__column">
                    <div className="row m-row align-spaced footer__row">
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <div>
                                <span className="footer__txt --title">ADDRESS/</span>
                                <span className="footer__txt">San Francisco, CA, USA</span>
                                <span className="footer__txt">Lviv, Ukraine</span>
                                <a href="tel:(415) 903-0707" className="footer__txt">(415) 903-0707</a>
                                <a href="mailto:thecoder@gmail.com" className="footer__txt mb-15">info@thecoderdev.com</a>
                            </div>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">MENU/</span>
                            <ul className="footer-nav">
                                <li className="footer-nav__item">
                                    <Link to="/#our-services" className="footer-nav__link">
                                        <span>Our Services</span>
                                        <span>Our Services</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link to="/#our-works" className="footer-nav__link">
                                        <span>Portfolio</span>
                                        <span>Portfolio</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link to="/#achievements" className="footer-nav__link">
                                        <span>Team experience</span>
                                        <span>Team experience</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link to="/#our-mission" className="footer-nav__link">
                                        <span>Our Mission</span>
                                        <span>Our Mission</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link to="/blog" className="footer-nav__link">
                                        <span>Blog</span>
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link to="/#get-started" className="footer-nav__link">
                                        <span>Get started</span>
                                        <span>Get started</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">Social/</span>
                            <ul className="footer__social">
                                <li>
                                    <a href="https://www.facebook.com/thecoderdev" aria-label="THE CODER facebook"
                                       className="footer__txt footer__link --icon" target="_blank" rel="nofollow noopener noreferrer">
                                        <span className="icon-facebook"></span>
                                        <span className="icon-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/thecoderdev/" aria-label="THE CODER instagram"
                                       className="footer__txt footer__link --icon" target="_blank" rel="nofollow noopener noreferrer">
                                        <span className="icon-instagram"></span>
                                        <span className="icon-instagram"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/the-coder/" aria-label="THE CODER linkedin"
                                       className="footer__txt footer__link --icon" target="_blank" rel="nofollow noopener noreferrer">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/thecoderdev" aria-label="THE CODER behance"
                                       className="footer__txt footer__link --icon" target="_blank" rel="nofollow noopener noreferrer">
                                        <span className="icon-behance"></span>
                                        <span className="icon-behance"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p className="copyright__txt">All rights reserved 2018.
                <NavLink to="/privacy-policy" target='_blank' className="footer-nav__link copyright__link">
                    <span> Privacy Policy</span>
                    <span> Privacy Policy</span>
                </NavLink>
            </p>
        </div>
    </footer>
);

export default footer;