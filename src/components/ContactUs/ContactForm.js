import React from 'react';

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    state = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    onChangeHandler(e){
       this.setState({
          [e.target.name]: e.target.value
       })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="contacts-form">
                <form action="/" onSubmit={e => this.onSubmitHandler(e)}>
                    <div className="form__group-30">
                        <input
                            type="text" name="name" id="name"
                            className="form__input"
                            value={this.state.name}
                            onChange={e => this.onChangeHandler(e)}
                        />
                        <label htmlFor="name" className="form__label">
                            <div><span>ім’я</span></div>
                            <div><span>ім’я</span></div>
                        </label>
                    </div>
                    <div className="form__group-30">
                        <input
                            type="text" name="phone" id="phone"
                            className="form__input"
                            value={this.state.phone}
                            onChange={e => this.onChangeHandler(e)}
                        />
                        <label htmlFor="phone" className="form__label">
                            <div><span>телефон</span></div>
                            <div><span>телефон</span></div>
                        </label>
                    </div>
                    <div className="form__group-30">
                        <input
                            type="email" name="email" id="email"
                            className="form__input"
                            value={this.state.email}
                            onChange={e => this.onChangeHandler(e)}
                        />
                        <label htmlFor="email" className="form__label">
                            <div><span>e-mail</span></div>
                            <div><span>e-mail</span></div>
                        </label>
                    </div>
                    <div className="form__group-30">
                        <textarea
                            name="message" id="message"
                            className="form__area"
                            value={this.state.message}
                            onChange={e => this.onChangeHandler(e)}
                        />
                        <label htmlFor="email" className="form__label">
                            <div><span>коментар</span></div>
                            <div><span>коментар</span></div>
                        </label>
                    </div>

                    <button type="submit" className="btn">
                        submit
                    </button>

                </form>
            </div>
        )
    }
}

export default ContactForm;