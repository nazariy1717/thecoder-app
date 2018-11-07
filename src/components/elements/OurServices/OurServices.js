import React from 'react';
import './our_services.scss';
import Scrollchor from 'react-scrollchor';

class OurServices extends React.Component{

    render(){
        return(
            <section className="our-services" id="our-services">
                <div className="container">
                    <div className="our-services__content">
                        <div className="our-services__tab --active" id="tab-1">
                            <div className="row m-row align-middle">
                                <div className="column col-xs-12">
                                    <div className="our-services__title title-box">
                                        <p>
                                            <span>o</span>
                                            <span>u</span>
                                            <span>r</span>
                                            <span className="sub">m</span>
                                            <span className="sub">f</span>
                                            <span className="sub">g</span>
                                            <span className="sub">j</span>
                                            <span className="sub">k</span>
                                            <span className="sub">p</span>
                                            <span className="sub">n</span>
                                            <span className="sub">i</span>
                                        </p>
                                        <p>
                                            <span>s</span>
                                            <span>e</span>
                                            <span>r</span>
                                            <span>v</span>
                                            <span>i</span>
                                            <span>c</span>
                                            <span>e</span>
                                            <span>s</span>
                                            <span className="sub">q</span>
                                            <span className="sub">a</span>
                                            <span className="sub">n</span>
                                            <span className="sub">s</span>
                                        </p>
                                        <h2 className="title-box__hidden">Our Services</h2>
                                    </div>
                                </div>
                                <div className="column col-xs-12">
                                    <div className="our-services__right">
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>01</i>Website development
                                            </span>
                                            <p className="services-item__txt">Custom built website on framework or WordPress/Squarespace? We will review business objectives with you and provide recommended solution. With 50+ websites built, we know what it takes to skyrocket your business while remaining on budget. We work with the following technologies:</p>
                                            <p className="services-item__inner-txt">
                                                <span>Front end</span>
                                                HTML5, Jade, CSS3, SASS, LESS, Gulp, Grunt, Webpack, JS6, JQuery, ReactJS, AngularJS
                                            </p>
                                            <p className="services-item__inner-txt">
                                                <span>Back end</span>
                                                PHP, CakePhp, Yii, NodeJs
                                            </p>
                                            <p className="services-item__inner-txt">
                                                <span>CMS</span>
                                                Magento, Squarespace, WordPress, Joomla, OpenCart
                                            </p>
                                            <p className="services-item__inner-txt">
                                                <span>Databases</span>
                                                MongoDB, MySQL
                                            </p>
                                        </div>
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>02</i>Maintenance
                                            </span>
                                            <p className="services-item__txt">While WordPress or Squarespace websites require little maintenance, if you need someone to quickly make any content changes, we are here for you. With the custom sites built on framework, we offer packages with:</p>
                                            <ul className="services-item__list row m-row">
                                                <li className="column">- Regular framework and plugin updates</li>
                                                <li className="column">- Regular backups</li>
                                                <li className="column">- SSL certificate and latest security compliance</li>
                                                <li className="column">- Website testing and ongoing improvement of loading speeds </li>
                                                <li className="column">- Content updates</li>
                                            </ul>
                                        </div>
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>03</i>Branding - visual identity
                                            </span>
                                            <p className="services-item__txt">Brands have emotional connections with their customers and we know how to build those connections by developing relevant:</p>
                                            <ul className="services-item__list row m-row">
                                                <li className="column">- Logos</li>
                                                <li className="column">- Style guides</li>
                                                <li className="column">- Brand collateral</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Scrollchor type="button" className="btn btn-primary our-services__btn" to="get-started" animate={{duration: 250}}>
                                        <i className="btn-primary__line btn-primary__line-1"></i>
                                        <i className="btn-primary__line btn-primary__line-2"></i>
                                        <span className="btn-primary__txt">Get started</span>
                                        <span className="btn-primary__txt">Get started</span>
                                    </Scrollchor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurServices;