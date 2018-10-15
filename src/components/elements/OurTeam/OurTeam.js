import React, {Component} from 'react';
import './our-team.scss';
import ScrollMagic from "scrollmagic";
import {isMobile} from "react-device-detect";
import TimelineMax from "gsap/TimelineMax";
import TweenMax from "gsap/TweenMax";

import item1 from './items/taras.jpg'
import item2 from './items/ruslan.jpg'
import item3 from './items/taras1.jpg'
import item4 from './items/bogdan.jpg'
import item5 from './items/nazar.jpg'
import item6 from './items/sofia.jpg'
import item7 from './items/yura.jpg'
import item8 from './items/misha.jpg'

class OurClients extends Component {

    componentDidMount() {
        let controller = new ScrollMagic.Controller();

        if(!isMobile) {
            let timeline = new TimelineMax();

            let t1 =TweenMax.staggerFrom( document.querySelectorAll('.our-team__title span'), 0.15, {
                opacity: 0,
                y: 55,
            }, 0.03);

            let t2 =TweenMax.staggerFrom( document.querySelectorAll('.our-team-item'), 0.15, {
                opacity: 0,
                y: 55,
            }, 0.05);

            timeline.add(t1).add(t2);

            let scene = new ScrollMagic.Scene({
                offset:  0,
                triggerElement: '.our-team',
                reverse: false,
                triggerHook: .7,
            });
            scene.setTween(timeline);
            scene.addTo(controller);
        }
    }

    render() {
        return (
            <section className="our-team" id="our-team">
                <div className="container">
                    <div className="our-team__title title-box">
                        <p>
                            <span>T</span>
                            <span>e</span>
                            <span>a</span>
                            <span>m</span>
                            <span className="sub">o</span>
                            <span className="sub">i</span>
                            <span className="sub">l</span>
                            <span className="sub">k</span>
                            <span className="sub">n</span>
                            <span className="sub">b</span>
                            <span className="sub">d</span>
                        </p>
                        <p>
                            <span className="sub">y</span>
                            <span className="sub">t</span>
                            <span className="sub">r</span>
                            <span className="sub">q</span>
                            <span className="sub">a</span>
                            <span className="sub">s</span>
                            <span className="sub">d</span>
                            <span className="sub">v</span>
                            <span className="sub">c</span>
                            <span className="sub">z</span>
                        </p>
                        <h2 className="title-box__hidden">Team</h2>
                    </div>

                    <div className="row m-row">
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item1} alt="team-01" title="team-01" className="image"/>
                                <span className="our-team-item__name">Taras Melnychenko</span>
                                <span className="our-team-item__role app-txt">Co-Founder, CMO</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item2} alt="team-02" title="team-02" className="image"/>
                                <span className="our-team-item__name">Ruslan Senyo</span>
                                <span className="our-team-item__role app-txt">Co-Founder, CEO</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item5} alt="team-03" title="team-03" className="image"/>
                                <span className="our-team-item__name">Nazar Kalinchuk</span>
                                <span className="our-team-item__role app-txt">Team lead, Senior Front-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item6} alt="team-04" title="team-04" className="image"/>
                                <span className="our-team-item__name">Sofia Havryso</span>
                                <span className="our-team-item__role app-txt">Art Director</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item3} alt="team-05" title="team-05" className="image"/>
                                <span className="our-team-item__name">Taras Navosha</span>
                                <span className="our-team-item__role app-txt">Office manager</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item4} alt="team-06" title="team-06" className="image"/>
                                <span className="our-team-item__name">Bohdan Hulovatyi</span>
                                <span className="our-team-item__role app-txt">Junior Front-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item7} alt="team-07" title="team-07" className="image"/>
                                <span className="our-team-item__name">Yura Hymenetskiy</span>
                                <span className="our-team-item__role app-txt">Senior Back-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <img src={item8} alt="team-08" title="team-08" className="image"/>
                                <span className="our-team-item__name">Mykhailo Baran</span>
                                <span className="our-team-item__role app-txt">QA engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurClients;