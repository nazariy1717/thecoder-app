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
                        <h2 className="title-box__inner --white">Our clients</h2>
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