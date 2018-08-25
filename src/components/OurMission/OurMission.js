import React from "react";
import './our_mission.scss'
import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class OurMission extends React.Component{

    componentDidMount() {

        let timeline = new TimelineMax();

        let t1 =TweenMax.staggerFrom( document.querySelectorAll('.our-mission__title span'), 0.45, {
            opacity: 0,
            y: 55
        }, 0.05);

        let t2 = TweenMax.staggerFrom( document.querySelectorAll('.quote__content .app-txt'), 0.45, {
            opacity: 0,
            y: 75
        }, 0.05);
        let t3 = TweenMax.from( document.querySelector('.quote__author'), 0.45, {
            opacity: 0,
            x: -75,
        });

        timeline.add(t1);
        timeline.add(t2);
        timeline.add(t3);

        let h = window.innerHeight / 3;
        let controller = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({
            duration: '50%',
            offset: 0,
            triggerElement: '.our-mission',
            reverse: true,
        });

        scene.addIndicators({name: '1'});
        scene.setTween(timeline);
        scene.setPin('.our-mission');
        scene.addTo(controller);

    }

    render(){
        return(
            <section className="our-mission">
                <div className="our-mission-trigger"></div>
                <div className="container">
                    <div className="our-mission__title title-box">
                        <p>
                            <span>o</span>
                            <span>u</span>
                            <span>r</span>
                            <span className="sub">q</span>
                            <span className="sub">r</span>
                            <span className="sub">t</span>
                            <span className="sub">f</span>
                            <span className="sub">a</span>
                            <span className="sub">e</span>
                            <span className="sub">i</span>
                            <span className="sub">n</span>
                            <span className="sub">m</span>
                        </p>
                        <p>
                            <span>m</span>
                            <span>i</span>
                            <span>s</span>
                            <span>s</span>
                            <span>i</span>
                            <span>o</span>
                            <span>n</span>
                            <span className="sub">e</span>
                            <span className="sub">c</span>
                            <span className="sub">i</span>
                            <span className="sub">j</span>
                            <span className="sub">y</span>
                        </p>

                        <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                    </div>
                    <div className="quote">
                         <div className="quote__content">
                             <p className="app-txt">Our mission is to delight the end user of your website. We think through every detail to make their browsing experience a seamless journey. </p>
                             <p className="app-txt">Whether it is the first impression or order completion, details matter! </p>
                         </div>
                        <div className="quote__author">
                            <span className="quote__name">Ruslan</span>
                            <ul className="quote__list">
                                <li>
                                    <a href="/" className="" rel="nofollow" target="_blank">
                                        <span className="icon-facebook"></span>
                                        <span className="icon-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="" rel="nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                                </li>
                            </ul>
                            <p className="quote__txt">Founder + CEO</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurMission;