import React from 'react';
import './contact_us.scss';
import { TweenMax }  from "gsap";
import ScrollMagic from 'ScrollMagic';
import ContactForm from "./ContactForm";

class ContactUs extends React.Component{

    constructor(props){
        super(props);
        this.doAnimate = this.doAnimate.bind(this);
    }

    componentDidMount() {
        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: 100,    // the scene should last for a scroll distance of 100px
            offset: 50        // start this scene after scrolling for 50px
        })
            .setPin("#my-sticky-element") // pins the element for the the scene's duration
            .addTo(controller); // assign the scene to the controller
    }

    doAnimate(){
        console.log('do animete');

        let array = document.querySelectorAll('.contacts-title span');
        console.log(array);

        TweenMax.staggerFrom(array, 0.3, {
            opacity: 0,
            y: 55
        }, 0.05);

    }


    render() {
        return (
            <section className="section contact-us">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6">
                            {/*<TextScramble text={this.title}/>*/}
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
                            <button onClick={this.doAnimate}>do animate </button>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;