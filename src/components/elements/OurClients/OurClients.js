import React, {Component} from 'react';
import './our-clients.scss';

class OurClients extends Component {
    render() {
        return (
            <div className="our-clients" id="our-clients">
                <div className="container">
                    <div className="our-clients__title title-box">
                        <h2 className="title-box__inner --white">Our clients</h2>
                    </div>
                    <div className="row m-row align-middle">
                        <div className="column col-md-3 col-sm-6 col-xs-12">
                            <div className="our-clients__item --item1">
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-12">
                            <div className="our-clients__item --item2">
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-12">
                            <div className="our-clients__item --item3">
                            </div>
                        </div>
                        <div className="column col-md-3 col-sm-6 col-xs-12">
                            <div className="our-clients__item --item4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurClients;