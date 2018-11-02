import React from "react";
import './our_works.scss'

class OurWorks extends React.Component{

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
                            <a href="https://www.behance.net/gallery/71260113/Logo-design-and-corporate-style-for-an-Indian-restauran" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content --item-6"></div>
                                    <p className="work-item__desc"><span>Bombay Ruby Indian cuisine</span></p>
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