import React from 'react';
import './firstScreen.scss';
import { TweenMax }  from "gsap";

class FirstScreen extends React.Component{

    componentDidMount() {

       TweenMax.staggerFrom( document.querySelectorAll('.first-screen__title span'), 0.35, {
            opacity: 0,
            y: 55
        }, 0.05);

    }

    render(){
        return(
            <div className="first-screen">
                <p className="first-screen__coder">details matter</p>
                <div className="first-screen__content">
                    <div className="first-screen__title title-box ">
                        <p>
                            <span className="sub">i</span>
                            <span className="sub">c</span>
                            <span className="sub">s</span>
                            <span className="sub">p</span>
                            <span className="sub">i</span>
                            <span className="sub">e</span>
                            <span className="sub">k</span>
                            <span className="sub">h</span>
                            <span className="sub">e</span>
                            <span className="sub">t</span>
                            <span className="sub">x</span>
                            <span className="sub">u</span>
                        </p>
                        <p>
                            <span>w</span>
                            <span>e</span>
                            <span>b</span>
                            <span>s</span>
                            <span>i</span>
                            <span>t</span>
                            <span>e</span>
                            <span className="sub">w</span>
                            <span className="sub">e</span>
                            <span className="sub">t</span>
                            <span className="sub">x</span>
                            <span className="sub">mx</span>
                        </p>
                        <p>
                            <span>d</span>
                            <span>e</span>
                            <span>v</span>
                            <span>e</span>
                            <span>l</span>
                            <span>o</span>
                            <span>p</span>
                            <span>m</span>
                            <span>e</span>
                            <span>n</span>
                            <span>t</span>
                            <span className="sub">y</span>
                        </p>
                        <p>
                            <span className="sub">m</span>
                            <span className="sub">y</span>
                            <span className="sub">q</span>
                            <span className="sub">t</span>
                            <span className="sub">a</span>
                            <span className="sub">t</span>
                            <span className="sub">e</span>
                            <span className="sub">p</span>
                            <span className="sub">e</span>
                            <span className="sub">u</span>
                            <span className="sub">x</span>
                            <span className="sub">z</span>
                        </p>
                        <h1 className="title-box__hidden">WEBSITE DEVELOPMENT</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstScreen;