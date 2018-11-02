import React from 'react';
import './achievements.scss';


class Achievements extends React.Component{

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
                                <span>e</span>
                                <span>x</span>
                                <span>p</span>
                                <span>e</span>
                                <span>r</span>
                                <span>i</span>
                                <span>e</span>
                                <span>n</span>
                                <span>c</span>
                                <span>e</span>
                                <span className="sub">q</span>
                                <span className="sub">s</span>
                            </p>
                            <h2 className="title-box__hidden">Team experience</h2>
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
                                <p>Experience in website developing</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-3">
                            <div className="achievement-item__title">
                                <p><strong>51</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>51 websites built</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-4">
                            <div className="achievement-item__title">
                                <p><strong>123</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Logos & style guides developed</p>
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