import React from 'react';
import './contact_us.scss';
import { TweenMax }  from "gsap";
import ContactForm from "./ContactForm";
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

class ContactUs extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    // componentDidMount() {
    //
    //    let t1 = new TweenMax.staggerFrom( document.querySelectorAll('.contact-us .contacts-title span'), 0.3, {
    //         opacity: 0,
    //         y: 55
    //     }, 0.05);
    //
    //    let controller = new ScrollMagic.Controller();
    //    let scene = new ScrollMagic.Scene({
    //        duration: 100,
    //        offset: -300,
    //        triggerElement: '.trigger',
    //        triggerHook: 0,
    //    });
    //    scene.addIndicators({name: 'ffd'});
    //    scene.setTween(t1);
    //    scene.addTo(controller);
    //
    // }

    render() {
        return (
            <section className="section contact-us">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6">
                            <div className="title-box contacts-title">
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
                        <div className="column col-lg-5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;