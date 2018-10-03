import React from 'react';
import './achievements.scss';
import {isMobile} from 'react-device-detect';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class Achievements extends React.Component{

    constructor(props) {
        super(props);
        this.controller = null;
    }

    componentDidMount() {
        this.controller = new ScrollMagic.Controller();

        if(!isMobile) {

            let timeline = new TimelineMax();

            let t1 =TweenMax.staggerFrom( document.querySelectorAll('.achievements__title span'), 0.15, {
                opacity: 0,
                y: 55,
                delay: .3,
            }, 0.03);

            let t2 =TweenMax.staggerFrom( document.querySelectorAll('.achievement-item p'), 0.2, {
                opacity: 0,
                y: 50,
            }, 0.05);

            timeline.add(t1).add(t2);

            let scene = new ScrollMagic.Scene({
                offset:  0,
                triggerElement: '.achievements',
                reverse: false,
                triggerHook: .7,
            });
            scene.setTween(timeline);
            scene.addTo(this.controller);
        }
        if(!isMobile) {
            let scene1 = new ScrollMagic.Scene({
                offset: 0,
                duration: '100%',
                triggerElement: '.achievements',
                reverse: true,
                triggerHook: 0,
            });
            scene1.setClassToggle('.header', '--white');
            scene1.addTo(this.controller);
        }
        // scene1.addIndicators();
    }
    componentWillUnmount(){
        this.controller.destroy();
    }

    render(){
        return(
            <section className="achievements" id="achievements">
                <div className="container">
                    <div className="achievements__content">
                        <div className="achievements__title title-box">
                            <p>
                                <span>t</span>
                                <span>e</span>
                                <span>a</span>
                                <span>m</span>
                                <span className="sub">z</span>
                                <span className="sub">i</span>
                                <span className="sub">n</span>
                                <span className="sub">m</span>
                                <span className="sub">o</span>
                                <span className="sub">n</span>
                                <span className="sub">j</span>
                            </p>
                            <p>
                                <span>a</span>
                                <span>c</span>
                                <span>h</span>
                                <span>i</span>
                                <span>e</span>
                                <span>v</span>
                                <span>e</span>
                                <span>m</span>
                                <span>e</span>
                                <span>n</span>
                                <span>t</span>
                                <span>s</span>
                            </p>
                            <h2 className="title-box__hidden">TEAM ACHIEVEMENT</h2>
                        </div>

                        <div className="achievement-item --item-1">
                            <div className="achievement-item__title">
                                <p><strong>4</strong> years</p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Being the best in class web development team</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-2">
                            <div className="achievement-item__title">
                                <p><strong>8448</strong> hours</p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Experience in web site developing</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-3">
                            <div className="achievement-item__title">
                                <p><strong>51</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Web projects completed</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-4">
                            <div className="achievement-item__title">
                                <p><strong>123</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Logos developed</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-5">
                            <div className="achievement-item__title">
                                <p><strong>5</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>startups launched with</p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>"business start" system</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-6">
                            <div className="achievement-item__title">
                                <p><strong>12</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>startups launched with our products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Achievements;