import React from 'react';
import './contact_us.scss';
import ContactForm from "./ContactForm";

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class ContactUs extends React.Component{


    componentDidMount() {

        let timeline = new TimelineMax();

        let t1 =  TweenMax.staggerFrom( document.querySelectorAll('.contact-us__title span'), 0.35, {
            opacity: 0,
            y: 55
        }, 0.05);

        timeline.add(t1);

        let controller = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({
            offset:  0,
            triggerElement: '.contact-us',
            reverse: true,
            triggerHook: .5,
        });
        scene.setTween(timeline);
        scene.addTo(controller);
    }

    render() {
        return (
            <section className="section contact-us">
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
                                <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                            </div>
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