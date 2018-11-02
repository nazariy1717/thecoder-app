import React, {Component} from 'react';
import  "./testimonials.scss";
import client1 from './clients/client1.png';
import client2 from './clients/client2.jpg';

class Testimonials extends Component {

    render() {
        return (
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="testimonials__title title-box">
                        <p>
                            <span>T</span>
                            <span>e</span>
                            <span>s</span>
                            <span>t</span>
                            <span>i</span>
                            <span>m</span>
                            <span>o</span>
                            <span>n</span>
                            <span>i</span>
                            <span>a</span>
                            <span>l</span>
                            <span>s</span>
                        </p>
                        <p>
                            <span className="sub">g</span>
                            <span className="sub">h</span>
                            <span className="sub">r</span>
                            <span className="sub">k</span>
                            <span className="sub">y</span>
                            <span className="sub">o</span>
                            <span className="sub">n</span>
                            <span className="sub">n</span>
                            <span className="sub">p</span>
                            <span className="sub">v</span>
                            <span className="sub">y</span>
                            <span className="sub">q</span>
                        </p>
                        <h2 className="title-box__hidden">Testimonials</h2>
                    </div>
                    <div className="quote-client">
                        <div className="quote-client__content">
                            <img src={client1} alt="Nathan Downs" title="Nathan Downs"/>
                            <span className="quote-client__name">
                                Nathan Downs
                                 <a href="https://www.linkedin.com/in/ndowns1/" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">I have worked with the team from THE CODER on several branding/website development projects and they check all my boxes for a creative partnership. All in all I found them to be highly collaborative & creative in their approach. Fast with communication, efficient turnaround and they have a deep technical knowledge that made project management easy on our end while always staying on budget. Taras and team are highly recommended.</p>
                        </div>
                        <div className="quote-client__content --right">
                            <img src={client2} alt="Halina Kucheriava" title="Halina Kucheriava"/>
                            <span className="quote-client__name">
                                Halina Kucheriava
                                 <a href="https://www.linkedin.com/in/halina-kucheriava-8298ba35/" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">The Coder team created our website from scratch. It was a great experience to work with Ruslan as the manager of the project and the whole team. They are true professionals. The website was developed within deadlines, the team paid a lot of attention to all details to showcase our services in the best possible way. The result is great, the website meets all our needs, it's pretty, clean, comfortable and easy to use. We had some updates several times after the website was developed and The Coder responded quickly and made all the needed updates. I highly recommend these guys as a great professional team, that cares about its clients!</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;