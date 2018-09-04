import React from "react";
import './our_works.scss'

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

import item1 from './items/leodrive.mp4';
import item2 from './items/kucherstudio.mp4';

class OurWorks extends React.Component{

    componentDidMount() {

        let timeline = new TimelineMax();

        let t1 =  TweenMax.staggerFrom( document.querySelectorAll('.our-mission__title span'), 0.3, {
            opacity: 0,
            y: 55
        }, 0.05);
        timeline.add(t1);

        let controller = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({
            offset:  0,
            triggerElement: '.our-mission',
            reverse: true,
            triggerHook: .7,
        });
        scene.setTween(timeline);
        scene.addTo(controller);
    }
    render(){
        return(
            <section className="our-works">
                <div className="container">
                    <div className="our-works__title title-box">
                        <p>
                            <span>o</span>
                            <span>u</span>
                            <span>r</span>
                            <span className="sub">g</span>
                            <span className="sub">a</span>
                            <span className="sub">o</span>
                            <span className="sub">f</span>
                            <span className="sub">a</span>
                            <span className="sub">b</span>
                            <span className="sub">n</span>
                            <span className="sub">r</span>
                            <span className="sub">t</span>
                        </p>
                        <p>
                            <span>w</span>
                            <span>o</span>
                            <span>r</span>
                            <span>k</span>
                            <span>s</span>
                            <span className="sub">o</span>
                            <span className="sub">n</span>
                            <span className="sub">p</span>
                            <span className="sub">c</span>
                            <span className="sub">v</span>
                            <span className="sub">j</span>
                            <span className="sub">q</span>
                        </p>
                        <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                    </div>

                </div>
                <div className="our-works__container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="/" rel="nofollow" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video className="work-item__video" loop="true" muted="muted"
                                               autoPlay="true" data-keepplaying="" data-autoplay="true" playsinline=""
                                               webkit-playsinline="" src={item1}>
                                        </video>
                                    </div>
                                    <p className="work-item__desc">Leodrive - Daily rent of hybrid cars</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="/" rel="nofollow" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video className="work-item__video" loop="true" muted="muted"
                                               autoPlay="true" data-keepplaying="" data-autoplay="true" playsinline=""
                                               webkit-playsinline="" src={item2}>
                                        </video>
                                    </div>
                                    <p className="work-item__desc"></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurWorks;