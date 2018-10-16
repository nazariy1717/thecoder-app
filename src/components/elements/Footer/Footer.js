import React from 'react';
import './footer.scss';
import logo from './logo.svg';

const footer = () => (
    <footer className="footer" itemScope="&nbsp;" itemType="http://schema.org/LocalBusiness">
        <div className="container">
            <div className="row m-row">
                <div className="column col-lg-3 col-md-3 col-sm-2 col-xs-12 footer__column">
                    <span className="hidden" itemProp="name">The Coder</span>
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="The Coder" className="hidden" itemProp="image"/>
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
                                <span className="footer__txt --title">Address/</span>
                                <span className="footer__txt" itemProp="address">San Francisco, CA, USA</span>
                                <span className="footer__txt" itemProp="address">Lviv, Ukraine</span>
                            </div>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">phone/</span>
                            <span className="footer__txt" itemProp="telephone">(415) 903-0707</span>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">e-mail/</span>
                            <a href="mailto:thecoder@gmail.com" className="footer__txt mb-15" itemProp="email">info@thecoderdev.com</a>
                            <a href="https://www.iubenda.com/privacy-policy/64548822"
                               className="iubenda-white iubenda-embed footer__privacy-policy"
                               title="Privacy Policy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="row m-row align-spaced footer__row">
                <li className="column col-xs-3 footer__column">
                    <a href="https://www.facebook.com/thecoderdev"
                       className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                        <span>Facebook</span>
                        <span>Facebook</span>
                    </a>
                </li>
                <li className="column col-xs-3 footer__column">
                    <a href="https://www.instagram.com/thecoderdev/"
                       className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                        <span>Instagram</span>
                        <span>Instagram</span>
                    </a>
                </li>
                <li className="column col-xs-3 footer__column">
                    <a href="https://www.linkedin.com/company/the-coder/"
                       className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                        <span>Linkedin</span>
                        <span>Linkedin</span>
                    </a>
                </li>
                <li className="column col-xs-3 footer__column">
                    <a href="https://www.behance.net/thecoderdev"
                       className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                        <span>Behance</span>
                        <span>Behance</span>
                    </a>

                </li>
            </ul>
        </div>
    </footer>
);

export default footer;