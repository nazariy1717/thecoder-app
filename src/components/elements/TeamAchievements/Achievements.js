import React from 'react';
import './achievements.scss';

class Achievements extends React.Component{

    render(){
        return(
            <section className="achievements" id="achievements">
                <div className="container">
                    <div className="achievements__content">
                        <div className="achievements__title title-box">
                            <h2 className="title-box__inner --white">Team experience</h2>
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
                                <p>Experience in website development</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-3">
                            <div className="achievement-item__title">
                                <p><strong>31</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>E-commerce websites built</p>
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
                                <p><strong>20</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Сommercial websites built</p>
                            </div>
                        </div>
                        <div className="achievement-item --item-6">
                            <div className="achievement-item__title">
                                <p><strong>12</strong></p>
                            </div>
                            <div className="achievement-item__txt">
                                <p>Startups launched with our products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Achievements;