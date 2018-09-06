import React from 'react';
import './our_services.scss';
import OurServicesForm from './OurServicesForm';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class OurServices extends React.Component{


    componentDidMount() {

        let timelineServices = new TimelineMax();

        let t1 = TweenMax.staggerFrom( document.querySelectorAll('.our-services__title span'), 0.25, {
            opacity: 0,
            y: 55
        }, 0.05);

        let t2 = TweenMax.from( document.querySelector('.our-services__btn'), 0.2, {
            opacity: 0,
            y: 55
        });

        let t3 = TweenMax.staggerFrom( document.querySelectorAll('.services-item'), 0.35, {
            opacity: 0,

        }, 0.2);

        timelineServices.add(t1).add(t3).add(t2);

        let controller = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({
            offset:  0,
            triggerElement: '.our-services',
            reverse: false,
            triggerHook: .8,
        });
        scene.setTween(timelineServices);
        scene.addTo(controller);
    }


    render(){
        return(
            <section className="our-services">
                <div className="container">
                    <div className="our-services__content">
                        <div className="our-services__tab --active" id="tab-1">
                            <div className="row m-row align-middle">
                                <div className="column col-lg-5 col-xs-12">
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
                                        <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                                    </div>
                                    <button type="button" className="btn btn-primary our-services__btn">
                                        <i className="btn-primary__line btn-primary__line-1"></i>
                                        <i className="btn-primary__line btn-primary__line-2"></i>
                                        <span className="btn-primary__txt">Contact Us</span>
                                        <span className="btn-primary__txt">Contact Us</span>
                                    </button>
                                </div>
                                <div className="column col-lg-7 col-xs-12">
                                    <div className="our-services__right">
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>01</i>Website development
                                            </span>
                                            <p className="services-item__txt">We offer individual solutions for our clients. Every website with its unique design and functionality is tailored to accomplish each customer's business needs.</p>
                                            <ul className="services-item__list row m-row">
                                                <li className="column">- E-commerce</li>
                                                <li className="column">- UX/UI design</li>
                                                <li className="column">- Corporate websites</li>
                                                <li className="column">- Cross-browser and cross-platform compatibility</li>
                                            </ul>
                                        </div>
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>02</i>Branding - visual elements
                                            </span>
                                            <p className="services-item__txt">Brands have emotional connections with their customers and we know how to build those connections by developing relevant:</p>
                                            <ul className="services-item__list row m-row">
                                                <li className="column">- Logos</li>
                                                <li className="column">- Typographic elements</li>
                                                <li className="column">- Style guide</li>
                                            </ul>
                                        </div>
                                        <div className="services-item">
                                            <span className="services-item__title">
                                                <i>03</i>Consulting & Marketing
                                            </span>
                                            <p className="services-item__txt">We launched over 50 web projects and know what it takes to start your business successfully</p>
                                            <ul className="services-item__list row m-row">
                                                <li className="column">- Digital Marketing</li>
                                                <li className="column">- Social Media Marketing</li>
                                                <li className="column">- Email Marketing</li>
                                            </ul>
                                        </div>
                                    </div>
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