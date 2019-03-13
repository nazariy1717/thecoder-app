import React, {Component} from 'react';
import  "./testimonials.scss";
import LazyLoad from 'react-lazyload';

import client1 from './clients/client1.png';
import client2 from './clients/client2.jpg';
import client3 from './clients/client3.jpg';

class Testimonials extends Component {

    render() {
        return (
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="testimonials__title title-box">
                        <h2 className="title-box__inner">Testimonials</h2>
                    </div>
                    <div className="quote-client">
                        <div className="quote-client__content">
                            <LazyLoad once height={175}>
                                <img src={client1} alt="Nathan Downs" title="Nathan Downs"/>
                            </LazyLoad>
                            <span className="quote-client__name">
                                Nathan Downs
                                 <a href="https://www.linkedin.com/in/ndowns1/" aria-label="Nathan Downs Linkedin" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">I have worked with the team from THE CODER on several branding/website development projects and they check all my boxes for a creative partnership. All in all I found them to be highly collaborative & creative in their approach. Fast with communication, efficient turnaround and they have a deep technical knowledge that made project management easy on our end while always staying on budget. Taras and team are highly recommended.</p>
                        </div>
                        <div className="quote-client__content --right">
                            <LazyLoad once height={175}>
                                <img src={client2} alt="Halina Kucheriava" title="Halina Kucheriava"/>
                            </LazyLoad>
                            <span className="quote-client__name">
                                Halina Kucheriava
                                 <a href="https://www.linkedin.com/in/halina-kucheriava-8298ba35/" aria-label="Halina Kucheriava Linkedin" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">The Coder team created our website from scratch. It was a great experience to work with Ruslan as the manager of the project and the whole team. They are true professionals. The website was developed within deadlines, the team paid a lot of attention to all details to showcase our services in the best possible way. The result is great, the website meets all our needs, it's pretty, clean, comfortable and easy to use. We had some updates several times after the website was developed and The Coder responded quickly and made all the needed updates. I highly recommend these guys as a great professional team, that cares about its clients!</p>
                        </div>
                        <div className="quote-client__content">
                            <LazyLoad once height={175}>
                                <img src={client3} alt="Nathan Downs" title="Nathan Downs"/>
                            </LazyLoad>
                            <span className="quote-client__name">
                                Natalya Havrysh
                                 <a href="https://www.linkedin.com/in/natalya-havrysh-998613106/" aria-label="Nathan Downs Linkedin" className="quote-client__link" rel="noopener noreferrer nofollow" target="_blank">
                                        <span className="icon-linkedin2"></span>
                                        <span className="icon-linkedin2"></span>
                                    </a>
                            </span>
                            <p className="app-txt">The Coder helped me launch my website quickly and at reasonable cost. I am particularly satisfied with the communication with Ruslan, CEO and Project Manager, who took every reasonable step to understand the logic of my requirements and my business at large and demonstrated excellent work ethics and soft skills.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;