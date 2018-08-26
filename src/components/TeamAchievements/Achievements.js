import React from 'react';
import './achievements.scss';

import { TweenMax,TimelineMax }  from "gsap";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class Achievements extends React.Component{

    componentDidMount() {

        let timeline = new TimelineMax();

        let t1 =TweenMax.staggerFrom( document.querySelectorAll('.achievements__title span'), 0.45, {
            opacity: 0,
            y: 55
        }, 0.05);


        timeline.add(t1);

        let controller = new ScrollMagic.Controller();
        let scene1 = new ScrollMagic.Scene({
            duration: '100%',
            offset: '0%',
            triggerElement: '.achievements__content',
            reverse: true,
        });

        scene1.addIndicators({name: '1'});
        scene1.setTween(timeline);
        scene1.setPin('.achievements__content');
        scene1.addTo(controller);
    }

    render(){
        return(
            <section className="achievements">
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
                            <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                        </div>

                        <div className="achievement-item --item-1">
                            <div className="achievement-item__title">
                                <span><strong>4</strong> years</span>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Being the best in class web development team</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-2">
                            <div className="achievement-item__title">
                                <span><strong>8448</strong> hours</span>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Experience in web site developing</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-3">
                            <div className="achievement-item__title">
                                <span><strong>51</strong></span>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Web projects completed</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-4">
                            <div className="achievement-item__title">
                                <span><strong>123</strong></span>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Logos developed</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-5">
                            <div className="achievement-item__title">
                                <span><strong>5</strong></span>
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
                                <span><strong>12</strong></span>
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