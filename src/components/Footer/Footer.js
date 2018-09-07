import React from 'react';
import './footer.scss';
import logo from './logo-foot.svg';

const footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row m-row">
                <div className="column col-lg-3 col-md-3 col-sm-2 col-xs-12">
                    <a href="/">
                        <img src={logo} alt="the coder logo" title="the coder logo" className="footer__logo"/>
                    </a>
                </div>
                <div className="column col-lg-9 col-md-9 col-sm-10 col-xs-12">
                    <div className="row m-row align-spaced footer__row">
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">Address/</span>
                            <span className="footer__txt">Lviv</span>
                            <span className="footer__txt">San Francisco</span>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">phone/</span>
                            <a href="tel:" className="footer__txt">+14155236050</a>
                        </div>
                        <div className="column col-sm-4 col-xs-12 footer__column">
                            <span className="footer__txt --title">e-mail/</span>
                            <a href="mailto:thecoder@gmail.com" className="footer__txt">office@thecoderdev.com</a>
                        </div>
                    </div>
                    <ul className="row m-row align-spaced footer__row">
                        <li className="column col-xs-4 footer__column">
                            <a href="/"
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
                            <a href="https://www.linkedin.com/company/the-coder/"
                               className="footer__txt footer__link" target="_blank" rel="nofollow noopener noreferrer">
                                <span>Linkedin</span>
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;