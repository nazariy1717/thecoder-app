import React from 'react';

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    state = {
        data: {
            name: '',
            phone: '',
            email: '',
            message: ''
        },
        errors: []
    };

    onChangeHandler(event){
       this.setState({
           data: { ...this.state.data, [event.target.name]: event.target.value}
       })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="contacts-form">
                <form action="/" onSubmit={this.onSubmitHandler}>
                    <div className="form__group-30">
                        <input
                            type="text" name="name" id="name"
                            className="form__input"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                        />
                        <label htmlFor="name" className="form__label">
                            <div><span>full name</span></div>
                            <div><span>full name</span></div>
                        </label>
                    </div>
                    <div className="form__group-30">
                        <input
                            type="text" name="phone" id="phone"
                            className="form__input"
                            value={this.state.phone}
                            onChange={this.onChangeHandler}
                        />
                        <label htmlFor="phone" className="form__label">
                            <div><span>phone</span></div>
                            <div><span>phone</span></div>
                        </label>
                    </div>
                    <div className="form__group-30">
                        <input
                            type="email" name="email" id="email"
                            className="form__input"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                        />
                        <label htmlFor="email" className="form__label">
                            <div><span>e-mail</span></div>
                            <div><span>e-mail</span></div>
                        </label>
                    </div>
                    <div className="form__group-40">
                        <textarea
                            name="message" id="message"
                            className="form__area"
                            value={this.state.message}
                            onChange={this.onChangeHandler}
                        />
                        <label htmlFor="email" className="form__label">
                            <div><span>details</span></div>
                            <div><span>details</span></div>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary m-auto">
                        <i className="btn-primary__line btn-primary__line-1"/>
                        <i className="btn-primary__line btn-primary__line-2"/>
                        <span className="btn-primary__txt">submit</span>
                        <span className="btn-primary__txt">submit</span>
                    </button>

                </form>
            </div>
        )
    }
}

export default ContactForm;