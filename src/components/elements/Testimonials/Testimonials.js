import React, {Component} from 'react';
import  "./testimonials.scss";

import client1 from './clients/client1.jpg';

import {isMobile} from 'react-device-detect';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';


class Testimonials extends Component {

    componentDidMount() {
        if(!isMobile) {

            let timeline = new TimelineMax();

            let t1 = TweenMax.staggerFrom(document.querySelectorAll('.testimonials__title span'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.03);

            let t2 = TweenMax.from(document.querySelector('.quote-client__content'), 0.15, {
                opacity: 0,
                y: 55
            });

            timeline.add(t1).add(t2);

            let controller = new ScrollMagic.Controller();
            let scene = new ScrollMagic.Scene({
                offset: 0,
                triggerElement: '.our-works',
                reverse: false,
                triggerHook: .7,
            });
            scene.setTween(timeline);
            scene.addTo(controller);
        }
    }
    render() {
        return (
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="testimonials__title title-box">
                        <p>
                            <span>T</span>
                            <span>e</span>
                            <span>s</span>
                            <span>t</span>
                            <span>i</span>
                            <span>m</span>
                            <span>o</span>
                            <span>n</span>
                            <span>i</span>
                            <span>a</span>
                            <span>l</span>
                            <span>s</span>
                        </p>
                        <p>
                            <span className="sub">g</span>
                            <span className="sub">h</span>
                            <span className="sub">r</span>
                            <span className="sub">k</span>
                            <span className="sub">y</span>
                            <span className="sub">o</span>
                            <span className="sub">n</span>
                            <span className="sub">n</span>
                            <span className="sub">p</span>
                            <span className="sub">v</span>
                            <span className="sub">y</span>
                            <span className="sub">q</span>
                        </p>
                        <h2 className="title-box__hidden">Testimonials</h2>
                    </div>
                    <div className="quote-client">
                        <div className="quote-client__content">
                            <img src={client1} alt=""/>
                            <span className="quote-client__name">
                                Nathan Downs
                                 <a href="https://www.linkedin.com/in/ndowns1/" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">I have worked with the team from THE CODER on several branding/website development projects and they check all my boxes for a creative partnership. All in all I found them to be highly collaborative & creative in their approach. Fast with communication, efficient turnaround and they have a deep technical knowledge that made project management easy on our end while always staying on budget. Taras and team are highly recommended.</p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Testimonials;