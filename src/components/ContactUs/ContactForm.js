import React from 'react';
import InputMask from 'react-input-mask';
import Validator from 'validator';
import axios from 'axios';
import qs from 'qs';
import {notify} from 'react-notify-toast';

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.validate = this.validate.bind(this);
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
        this.setState(
            {
                data: {...this.state.data, [event.target.name]: event.target.value},
            }, () =>{
                let errors = this.validate(this.state.data);
                this.setState({errors});
            }
        );
    }


    validate(data){


        const errors = {};

        if(!data.name){
            errors.name = "Required field";
        } else if(!Validator.isLength(data.name, {min:2, max: undefined})) {
            errors.name = "Full name must be longer than 2 characters";
        }

        if(!data.email){
            errors.email = "Required field";
        } else if(!Validator.isEmail(data.email)){
            errors.email = 'Email is incorrect';
        }

        if(!data.phone){
            errors.phone = "Required field";
        }  else if(!Validator.isLength(data.phone, {min:12, max: 12})) {
            errors.phone = "Phone name must be 10 characters long";
        }

        return errors;
    }



    onSubmitHandler(e){
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if(Object.keys(errors).length === 0){
           console.log(this.state.data);

            axios.post('/form.php', qs.stringify(this.state.data, { parseArrays: false }))
                .then((res)=> {
                    this.setState({
                        data: {
                            name: '',
                            phone: '',
                            email: '',
                            message: ''
                        },
                    });
                    notify.show("We will contact you as soon as possible", "success");
                });
        }
    }

    render(){

        const { data, errors } = this.state;

        return(
            <div className="contacts-form">
                <form action="/" onSubmit={this.onSubmitHandler}  >
                    <div className="form__group-30">
                        <input
                            type="text" name="name" id="name"
                            className="form__input"
                            value={data.name}
                            onChange={this.onChangeHandler}
                            autoComplete="off"
                        />
                        <label htmlFor="name" className="form__label">
                            <div><span>full name</span></div>
                            <div><span>full name</span></div>
                        </label>
                        { errors.name && <span className="form__error">{errors.name}</span>    }
                    </div>
                    <div className="form__group-30">
                        <InputMask  type="text" name="phone" id="phone"
                                    className="form__input"
                                    value={data.phone}
                                    onChange={this.onChangeHandler}
                                    autoComplete="off"
                                    mask="999 999 9999" maskChar="" />
                        <label htmlFor="phone" className="form__label">
                            <div><span>phone</span></div>
                            <div><span>phone</span></div>
                        </label>
                        { errors.phone && <span className="form__error">{errors.phone}</span>    }

                    </div>
                    <div className="form__group-30">
                        <input
                            type="text" name="email" id="email"
                            className="form__input"
                            value={data.email}
                            onChange={this.onChangeHandler}
                            autoComplete="off"
                        />
                        <label htmlFor="email" className="form__label">
                            <div><span>e-mail</span></div>
                            <div><span>e-mail</span></div>
                        </label>
                        { errors.email && <span className="form__error">{errors.email}</span>    }
                    </div>
                    <div className="form__group-40">
                        <textarea
                            name="message" id="message"
                            className="form__area"
                            value={data.message}
                            onChange={this.onChangeHandler}
                            autoComplete="off"
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