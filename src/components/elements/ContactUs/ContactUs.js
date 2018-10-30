import React from 'react';
import './contact_us.scss';
import ContactForm from "./ContactForm";
import {isMobile} from 'react-device-detect';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class ContactUs extends React.Component{

    componentDidMount() {
        if(!isMobile) {

            let timeline = new TimelineMax();

            let t1 = TweenMax.staggerFrom( document.querySelectorAll('.contact-us__title span'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.03);

            let t2 = TweenMax.from( document.querySelector('.contacts-form'), 0.25, {
                opacity: 0,
                y: 55
            });

            timeline.add(t1).add(t2);

            let controller = new ScrollMagic.Controller();
            let scene = new ScrollMagic.Scene({
                offset:  0,
                triggerElement: '.contact-us',
                reverse: false,
                triggerHook: .7,
            });

            scene.setTween(timeline);
            scene.addTo(controller);
        }
    }

    render() {
        return (
            <section className="section contact-us" id="contact-us">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6 col-md-6 col-xs-12">
                            <div className="title-box contact-us__title">
                                <p>
                                    <span>C</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span className="sub">m</span>
                                    <span className="sub">u</span>
                                </p>
                                <p>
                                    <span>u</span>
                                    <span>s</span>
                                    <span className="sub">k</span>
                                    <span className="sub">i</span>
                                    <span className="sub">d</span>
                                    <span className="sub">p</span>
                                    <span className="sub">h</span>
                                    <span className="sub">p</span>
                                    <span className="sub">j</span>
                                    <span className="sub">t</span>
                                </p>
                                <h2 className="title-box__hidden">Contact us</h2>
                            </div>
                            <p className="app-txt">Fill in the form and we will get back to you as soon as we can.</p>
                        </div>
                        <div className="column col-lg-5 col-md-6 col-xs-12">
                            <ContactForm  />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;