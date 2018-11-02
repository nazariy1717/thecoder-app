import React, {Component} from 'react';
import './our-clients.scss';


import client1 from "./items/client1.png";
import client2 from "./items/client2.png";
import client3 from "./items/client3.png";
import client4 from "./items/client4.png";

class OurClients extends Component {

    render() {
        return (
            <div className="our-clients" id="our-clients">
                <div className="container">
                    <div className="our-clients__title title-box">
                        <p>
                            <span>O</span>
                            <span>u</span>
                            <span>r</span>
                            <span className="sub">s</span>
                            <span className="sub">w</span>
                            <span className="sub">q</span>
                            <span className="sub">x</span>
                            <span className="sub">n</span>
                            <span className="sub">h</span>
                            <span className="sub">r</span>
                            <span className="sub">k</span>
                        </p>
                        <p>
                            <span>C</span>
                            <span>l</span>
                            <span>i</span>
                            <span>e</span>
                            <span>n</span>
                            <span>t</span>
                            <span>s</span>
                            <span className="sub">f</span>
                            <span className="sub">y</span>
                            <span className="sub">g</span>
                            <span className="sub">n</span>
                        </p>
                        <h2 className="title-box__hidden">Our clients</h2>
                    </div>

                    <div className="row m-row align-middle">
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client1} alt="CLOUD ONLY IT" title="CLOUD ONLY IT"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client2} alt="Bombay Ruby" title="Bombay Ruby"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client3} alt="CONCIERGE CATERING" title="CONCIERGE CATERING"/>
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-6">
                            <div className="our-clients__item">
                                <img src={client4} alt="METIS" title="METIS"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurClients;