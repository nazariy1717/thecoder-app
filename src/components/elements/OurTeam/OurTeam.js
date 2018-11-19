import React, {Component} from 'react';
import './our-team.scss';
import LazyLoad from 'react-lazyload';

import item1 from './items/taras.png';
import item2 from './items/ruslan.png';
import item3 from './items/taras1.png';
import item4 from './items/bogdan.png';
import item5 from './items/nazar.png';
import item6 from './items/sofia.png';
import item7 from './items/yura.png';
import item8 from './items/misha.png';

class OurClients extends Component {

    render() {
        return (
            <section className="our-team" id="our-team">
                <div className="container">
                    <div className="our-team__title title-box">
                        <h2 className="title-box__inner">Team</h2>
                    </div>
                    <div className="row m-row">
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item1} alt="Co-Founder, CMO of the CODER company" title="Co-Founder, CMO of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Taras Melnychenko</span>
                                <span className="our-team-item__role app-txt">Co-Founder, CMO</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item2} alt="Co-Founder, CEO of the CODER company" title="Co-Founder, CEO of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Ruslan Senyo</span>
                                <span className="our-team-item__role app-txt">Co-Founder, CEO</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item5} alt="Team lead, Senior Front-end of the CODER company" title="Team lead, Senior Front-end of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Nazar Kalinchuk</span>
                                <span className="our-team-item__role app-txt">Team lead, Senior Front-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item6} alt="Art Director of the CODER company" title="Art Director of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Sofia Havryso</span>
                                <span className="our-team-item__role app-txt">Art Director</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item3} alt="Office manager of the CODER company" title="Office manager of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Taras Navosha</span>
                                <span className="our-team-item__role app-txt">Office manager</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item4} alt="Front-end Developer of the CODER company" title="Front-end Developer of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Bohdan Hulovatyi</span>
                                <span className="our-team-item__role app-txt">Junior Front-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item7} alt="Senior Back-end Developer of the CODER company" title="Senior Back-end Developer of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Yura Hymenetskiy</span>
                                <span className="our-team-item__role app-txt">Senior Back-end Developer</span>
                            </div>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-xs-6">
                            <div className="our-team-item">
                                <LazyLoad once height={255}>
                                    <img src={item8} alt="QA engineer of the CODER company" title="QA engineer of the CODER company" className="image"/>
                                </LazyLoad>
                                <span className="our-team-item__name">Mykhailo Baran</span>
                                <span className="our-team-item__role app-txt">QA engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurClients;