import React from 'react';
import './contact_us.scss';
import TextScramble from "../TextScramble";
import ContactForm from "./ContactForm";

class ContactUs extends React.Component{

    constructor(props){
        super(props);
    }

    title = [
        `зв\'яжітьсяі`,
        `зрфлвайкоі`,
        `намилдшал`,
    ];

    render() {
        return (
            <section className="section contact-us">
                <div className="container">
                    <div className="row m-row align-middle">
                        <div className="column col-lg-6">
                            <TextScramble text={this.title}/>
                            <div className="title-box">
                                <p>
                                    <strong>
                                        <span>з</span>
                                        <span>в</span>
                                        <span>’</span>
                                        <span>я</span>
                                        <span>ж</span>
                                        <span>і</span>
                                        <span>т</span>
                                        <span>ь</span>
                                        <span>с</span>
                                        <span>я</span>
                                    </strong>
                                    <span>і</span>
                                </p>
                                <p>
                                    <strong>
                                        <span>з</span>
                                    </strong>
                                    <span>р</span>
                                    <span>ф</span>
                                    <span>л</span>
                                    <span>в</span>
                                    <span>а</span>
                                    <span>й</span>
                                    <span>к</span>
                                    <span>о</span>
                                    <span>і</span>
                                </p>
                                <p>
                                    <strong>
                                        <span>н</span>
                                        <span>а</span>
                                        <span>м</span>
                                        <span>и</span>
                                    </strong>
                                    <span>л</span>
                                    <span>д</span>
                                    <span>ш</span>
                                    <span>а</span>
                                    <span>л</span>
                                </p>
                                <h2 className="title-box__hidden">зв’яжіться з нами</h2>
                            </div>
                        </div>
                        <div className="column col-lg-5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUs;