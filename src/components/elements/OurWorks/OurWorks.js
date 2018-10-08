import React from "react";
import './our_works.scss'
import {isMobile} from 'react-device-detect';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class OurWorks extends React.Component{

    componentDidMount() {
        if(!isMobile) {

            let timeline = new TimelineMax();

            let t1 = TweenMax.staggerFrom(document.querySelectorAll('.our-works__title span'), 0.2, {
                opacity: 0,
                y: 55
            }, 0.03);

            let t2 = TweenMax.staggerFrom(document.querySelectorAll('.work-item'), 0.15, {
                opacity: 0,
                y: 55
            }, 0.1);

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
    render(){
        return(
            <section className="our-works" id="our-works">
                <div className="container">
                    <div className="our-works__title title-box">
                        <p>
                            <span>C</span>
                            <span>o</span>
                            <span>m</span>
                            <span>p</span>
                            <span>l</span>
                            <span>e</span>
                            <span>t</span>
                            <span>e</span>
                            <span>d</span>
                            <span className="sub">n</span>
                            <span className="sub">r</span>
                            <span className="sub">t</span>
                        </p>
                        <p>
                            <span>p</span>
                            <span>r</span>
                            <span>o</span>
                            <span>j</span>
                            <span>e</span>
                            <span>c</span>
                            <span>t</span>
                            <span>s</span>
                            <span className="sub">c</span>
                            <span className="sub">v</span>
                            <span className="sub">j</span>
                            <span className="sub">q</span>
                        </p>
                        <h2 className="title-box__hidden">Completed projects</h2>
                    </div>

                </div>
                <div className="our-works__container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://leodrive.com.ua/en/" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-1"></div>
                                    <p className="work-item__desc"><span>Leodrive</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://kucheriavi-studio.pro/" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-2"></div>
                                    <p className="work-item__desc"><span>Kucheriavi studio</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://komaagency.com/" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-3"></div>
                                    <p className="work-item__desc"><span>Koma agency</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://www.behance.net/gallery/70082431/Branding-for-DemsolFruit" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-4"></div>
                                    <p className="work-item__desc"><span>Demsol Fruit</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://procaterteam.com/" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-5"></div>
                                    <p className="work-item__desc"><span>PROCATERTEAM Catering</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://www.behance.net/gallery/70041097/Logo-for-Zhovtanecka" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-6"></div>
                                    <p className="work-item__desc"><span>Gjovtanecka united territorial community</span></p>
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