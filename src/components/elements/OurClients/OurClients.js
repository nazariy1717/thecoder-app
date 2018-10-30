import React, {Component} from 'react';
import './our-clients.scss';
import ScrollMagic from "scrollmagic";
import {isMobile} from "react-device-detect";
import TimelineMax from "gsap/TimelineMax";
import TweenMax from "gsap/TweenMax";

import client1 from "./items/client1.png";
import client2 from "./items/client2.png";
import client3 from "./items/client3.png";
import client4 from "./items/client4.png";

class OurClients extends Component {

    constructor(props) {
        super(props);
        this.controller = null;
    }

    componentDidMount() {
        this.controller = new ScrollMagic.Controller();

        if(!isMobile) {
            let timeline = new TimelineMax();

            let t1 =TweenMax.staggerFrom( document.querySelectorAll('.our-clients__title span'), 0.15, {
                opacity: 0,
                y: 55,
            }, 0.03);

            let t2 =TweenMax.staggerFrom( document.querySelectorAll('.our-clients__item'), 0.15, {
                opacity: 0,
                y: 55,
            }, 0.05);

            timeline.add(t1).add(t2);

            let scene = new ScrollMagic.Scene({
                offset:  0,
                triggerElement: '.our-clients',
                reverse: false,
                triggerHook: .7,
            });
            scene.setTween(timeline);
            scene.addTo(this.controller);
        }

        if(!isMobile) {
            let scene1 = new ScrollMagic.Scene({
                offset: 0,
                duration: document.getElementById('our-clients').offsetHeight,
                triggerElement: '.our-clients',
                reverse: true,
                triggerHook: 0.03,
            });
            scene1.setClassToggle('.header', '--white');
            scene1.addTo(this.controller);
        }
    }

    componentWillUnmount(){
        this.controller.destroy();
    }

    render() {
        return (
            <div className="our-clients" id="our-clients">
                <div className="container">
                    <div className="our-clients__title title-box">
                        <p>
                            <span>O</span>
                            <span>u</span>
                            <span>r</span>
                            <span className="sub">s</span>
                            <span className="sub">w</span>
                            <span className="sub">q</span>
                            <span className="sub">x</span>
                            <span className="sub">n</span>
                            <span className="sub">h</span>
                            <span className="sub">r</span>
                            <span className="sub">k</span>
                        </p>
                        <p>
                            <span>C</span>
                            <span>l</span>
                            <span>i</span>
                            <span>e</span>
                            <span>n</span>
                            <span>t</span>
                            <span>s</span>
                            <span className="sub">f</span>
                            <span className="sub">y</span>
                            <span className="sub">g</span>
                            <span className="sub">n</span>
                        </p>
                        <h2 className="title-box__hidden">Our clients</h2>
                    </div>

                    <div className="row m-row align-middle">
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client1} alt="CLOUD ONLY IT" title="CLOUD ONLY IT"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client2} alt="Bombay Ruby" title="Bombay Ruby"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client3} alt="CONCIERGE CATERING" title="CONCIERGE CATERING"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client4} alt="METIS" title="METIS"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurClients;