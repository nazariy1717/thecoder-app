import React from 'react';
import './footer.scss';
import logo from './logo-foot.svg';

const footer = () => (
    <footer className="footer" itemScope="" itemType="http://schema.org/LocalBusiness">
        <div className="container">
            <div className="row m-row">
                <div className="column col-lg-3 col-md-3 col-sm-2 col-xs-12">
                    <a href="/">
                        <img src={logo} alt="the coder logo" title="the coder logo"
                             itemProp="name" className="footer__logo"/>
                    </a>

                </div>
                <div className="column col-lg-9 col-md-9 col-sm-10 col-xs-12">
                    <div className="row m-row align-spaced footer__row">
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <div itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
                                <span className="footer__txt --title" >Address/</span>
                                <span className="footer__txt" itemProp="addressLocality">San Francisco</span>
                            </div>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">phone/</span>
                            <a href="tel:+14155236050" className="footer__txt" itemProp="telephone">(415) 903-0707</a>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">e-mail/</span>
                            <a href="mailto:thecoder@gmail.com" className="footer__txt" itemProp="email">info@thecoderdev.com</a>
                        </div>
                    </div>
                    <ul className="row m-row align-spaced footer__row">
                        <li className="column col-xs-4 footer__column">
                            <a href="https://www.facebook.com/thecoderdev"
                               className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="column col-xs-4 footer__column">
                            <a href="https://www.instagram.com/thecoderdev/"
                               className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                                <span>Instagram</span>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="column col-xs-4 footer__column">
                            <a href="https://www.behance.net/thecoderdev"
                               className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                                <span>Behance</span>
                                <span>Behance</span>
                            </a>
                            <a href="https://www.iubenda.com/privacy-policy/64548822"
                               className="iubenda-white iubenda-embed footer__privacy-policy"
                               title="Privacy Policy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;