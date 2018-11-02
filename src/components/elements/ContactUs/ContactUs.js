import React from 'react';
import './contact_us.scss';
import ContactForm from "./ContactForm";


class ContactUs extends React.Component{

    render() {
        return (
            <section className="section contact-us" id="contact-us">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6 col-md-6 col-xs-12">
                            <div className="title-box contact-us__title">
                                <p>
                                    <span>C</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span className="sub">m</span>
                                    <span className="sub">u</span>
                                </p>
                                <p>
                                    <span>u</span>
                                    <span>s</span>
                                    <span className="sub">k</span>
                                    <span className="sub">i</span>
                                    <span className="sub">d</span>
                                    <span className="sub">p</span>
                                    <span className="sub">h</span>
                                    <span className="sub">p</span>
                                    <span className="sub">j</span>
                                    <span className="sub">t</span>
                                </p>
                                <h2 className="title-box__hidden">Contact us</h2>
                            </div>
                            <p className="app-txt">Fill in the form and we will get back to you as soon as we can.</p>
                        </div>
                        <div className="column col-lg-5 col-md-6 col-xs-12">
                            <ContactForm  />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;