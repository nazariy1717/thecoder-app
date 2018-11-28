import React from 'react';
import './firstScreen.scss';
import Scrollchor from "react-scrollchor";
import LazyLoad from 'react-lazyload';
import Modal from 'react-awesome-modal';

class FirstScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            youtubeObj : null
        }
    }

    openModal() {
        this.setState({
            visible : true,
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render(){
        return(
            <div className="first-screen display-table">
                <LazyLoad once >
                    <div className="first-screen__bg"></div>
                </LazyLoad>
                <div className="display-table__cell">
                    <div className="first-screen__content">
                        <span className="first-screen__caption">details matter</span>
                        <h1 className="first-screen__title page-title">Web Development Company</h1>
                        <p className="first-screen__subtitle">free homepage mockup</p>
                        <div className="row m-row align-justify align-middle first-screen__row">
                            <div className="column">
                                <Scrollchor type="button" className="btn btn-primary first-screen__btn" to="get-started" animate={{duration: 250}}>
                                    <i className="btn-primary__line btn-primary__line-1"></i>
                                    <i className="btn-primary__line btn-primary__line-2"></i>
                                    <span className="btn-primary__txt">Get started</span>
                                    <span className="btn-primary__txt">Get started</span>
                                </Scrollchor>
                            </div>
                            <div className="column">
                                <button className="btn first-screen__play" onClick={() => this.openModal()}>watch video<span className="icon-play"></span></button>
                                <Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div className="popup">
                                        {
                                            (this.state.visible)
                                                ?
                                                <iframe className="video-container" src="https://www.youtube.com/embed/O8uaIX7KJLU"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                                :
                                                <div></div>
                                        }
                                        <a href="javascript:void(0);" className="popup__close" onClick={() => this.closeModal()}>Close</a>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstScreen;