import React from 'react';
import './firstScreen.scss';
import Scrollchor from "react-scrollchor";

class FirstScreen extends React.Component{

    render(){
        return(
            <div className="first-screen display-table">
                <div className="first-screen__bg"></div>
                <div className="display-table__cell">
                    <div className="first-screen__content">
                        <span className="first-screen__caption">details matter</span>
                        <h1 className="first-screen__title page-title">Web Development Company</h1>
                        <p className="first-screen__subtitle">We treat your project like <br/> our own</p>
                        <div className="row m-row align-center">
                            <div className="column">
                                <Scrollchor type="button" className="btn btn-primary first-screen__btn" to="get-started" animate={{duration: 250}}>
                                    <i className="btn-primary__line btn-primary__line-1"></i>
                                    <i className="btn-primary__line btn-primary__line-2"></i>
                                    <span className="btn-primary__txt">Get started</span>
                                    <span className="btn-primary__txt">Get started</span>
                                </Scrollchor>
                            </div>
                        </div>
                        <span className="first-screen__scroll">
                            <span className="first-screen__scroll__text">scroll</span>
                            <span className="first-screen__scroll__inner"></span>
                        </span>

                    </div>
                </div>
            </div>
        )
    }
}

export default FirstScreen;