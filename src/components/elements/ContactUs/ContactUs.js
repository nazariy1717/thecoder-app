import React from 'react';
import './contact_us.scss';
import ContactForm from "./ContactForm";

class ContactUs extends React.Component{
    render() {
        return (
            <section className="section contact-us" id="get-started">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6 col-md-6 col-xs-12">
                            <div className="title-box contact-us__title">
                                <h2 className="title-box__inner">Request a Free Quote</h2>
                            </div>
                            <p className="app-txt contact-us__txt">Fill out the form and we will get in touch with you right away.</p>
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