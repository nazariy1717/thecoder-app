import React from "react";
import './our_mission.scss'

class OurMission extends React.Component{

    render(){
        return(
            <section className="our-mission" id="our-mission">
                <p className="our-mission__coder">
                    details matter
                </p>
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
                        <h2 className="title-box__hidden">Our Mission</h2>
                    </div>
                    <div className="quote">
                         <div className="quote__content">
                             <p className="app-txt">Our mission is to delight the end user of your website. We think through every detail to make their browsing experience a seamless journey. </p>
                             <p className="app-txt">Whether it is the first impression or order completion, details matter! </p>
                         </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurMission;