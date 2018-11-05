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
                                    <span>R</span>
                                    <span>e</span>
                                    <span>q</span>
                                    <span>u</span>
                                    <span>e</span>
                                    <span>s</span>
                                    <span>t</span>
                                    <span className="sub">m</span>
                                    <span>a</span>
                                </p>
                                <p>
                                    <span>F</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span>e</span>
                                    <span className="sub">d</span>
                                    <span>Q</span>
                                    <span>u</span>
                                    <span>o</span>
                                    <span>t</span>
                                    <span>e</span>
                                </p>
                                <h2 className="title-box__hidden">Contact us</h2>
                            </div>
                            <p className="app-txt">Fill out the form and we will get in touch with you right away.</p>
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