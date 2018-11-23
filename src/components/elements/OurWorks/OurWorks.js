import React from "react";
import './our_works.scss'
import leo from './items/leo.mp4'
import kucher from './items/kucher.mp4'
import koma from './items/koma.mp4'
import demsol from './items/demsol.mp4'
import cater from './items/cater.mp4'
import bombay from './items/bombay.mp4'

class OurWorks extends React.Component{
    render(){
        return(
            <section className="our-works" id="our-works">
                <div className="container">
                    <div className="our-works__title title-box">
                        <h2 className="title-box__inner">Completed projects</h2>
                    </div>
                </div>
                <div className="our-works__container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://leodrive.com.ua/en/" aria-label="Site built for Leodrive" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={leo} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline>
                                        </video>
                                    </div>
                                    <p className="work-item__desc"><span>Leodrive</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://kucheriavi-studio.pro/" aria-label="Site built for Kucheriavi-studio" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={kucher} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline >
                                        </video>
                                    </div>
                                    <p className="work-item__desc"><span>Kucheriavi studio</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://komaagency.com/" aria-label="Site built for Komaagency" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={koma} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline >
                                        </video>
                                    </div>
                                    <p className="work-item__desc"><span>Koma agency</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://www.behance.net/gallery/70082431/Branding-for-DemsolFruit" aria-label="Branding for DemsolFruit"
                               rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={demsol} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline >
                                        </video>
                                    </div>
                                    <p className="work-item__desc"><span>Demsol Fruit</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://procaterteam.com/" aria-label="Site built for Procaterteam" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={cater} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline >
                                        </video>
                                    </div>
                                    <p className="work-item__desc"><span>PROCATERTEAM Catering</span></p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <a href="https://www.behance.net/gallery/71260113/Logo-design-and-corporate-style-for-an-Indian-restauran"
                               aria-label="Logo design and corporate style for an Indian restauran" rel="nofollow noopener noreferrer" target="_blank">
                                <div className="work-item">
                                    <div className="work-item__content">
                                        <video src={bombay} loop muted="muted" autoPlay="true" data-keepplaying data-autoplay playsInline >
                                        </video>
                                    </div>
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