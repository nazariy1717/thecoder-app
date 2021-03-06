import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {adminLogin} from '../../../actions/admin';
import './admin-auth.scss'

class AdminAuth extends Component{

    state = {
      data: {
          login: '',
          password: '',
      },
      loading: false,
      errors: []
    };

    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.validate = this.validate.bind(this);
    }

    submitHandler(e){
        e.preventDefault();
        const errors = this.validate(this.state.data);
        const data = this.state.data;
        this.setState({ errors });

        if(Object.keys(errors).length === 0){
            this.setState({ loading: true});
            this.props.adminLogin(data)
                .then(()=> this.props.history.push('/admin/dashboard'))
                .catch((err)=> {
                    console.log(err.response);
                    this.setState({ loading: false, errors : err.response.data.errors})
                })
        }
    }

    onChangeHandler(e){
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value}
        })
    }

    validate(data){
        const errors = {};
        if(!data.login){ errors.login = "Required field"; }
        if(!data.password){ errors.password = "Required field"; }
        return errors;
    }

    render(){
        let data= this.state.data;
        let errors = this.state.errors;
        let loading = this.state.loading;
        return(
            <div className="adm-auth display-table ">
                <div className="display-table__cell">
                    <div className="container">
                        <div className="adm-auth__content">
                            <svg viewBox="2 8.2 45.7 62.3" className="adm-auth__logo">
                                <g>
                                    <path fill="#000" stroke="#000" strokeWidth="4.252" strokeMiterlimit="10" d="M39.5,16.4c3.7,3.7,6,8.8,6,14.4
                                    c0,5.6-2.3,10.7-6,14.4c-3.7,3.7-8.8,6-14.4,6s-10.7-2.3-14.4-6c-3.7-3.7-6-8.8-6-14.4c0-5.6,2.3-10.7,6-14.4c3.7-3.7,8.8-6,14.4-6
                                    S35.8,12.7,39.5,16.4z M36,41.8c2.9-2.9,4.5-6.8,4.5-10.9c0-4.1-1.6-8-4.5-10.9s-6.8-4.5-10.9-4.5s-8,1.6-10.9,4.5
                                    s-4.5,6.8-4.5,10.9c0,4.1,1.6,8,4.5,10.9s6.8,4.5,10.9,4.5S33,44.7,36,41.8z"/>
                                    <path fill="#000" stroke="#000" strokeWidth="4.252" strokeMiterlimit="10" d="M42.9,67.5c0,0.5-0.5,0.9-1,0.9L25,62.3
                                    L8.2,68.4c-0.6,0-1-0.4-1-0.9V56.7c0-0.5,0.5-0.9,1-0.9L25,62.3l16.8-6.6c0.6,0,1,0.4,1,0.9C42.9,56.7,42.9,67.5,42.9,67.5z"/>
                                </g>
                            </svg>
                            <form onSubmit={this.submitHandler}>
                                <div className="form__group-30">
                                    <label htmlFor="login" className="form__label-custom">Login</label>
                                    <input type="text" name="login" id="login"
                                           autoComplete="off"
                                           className={(errors.password)?"form__input --theme --error-valid":"form__input --theme" }
                                           value={data.login}
                                           onChange={this.onChangeHandler}
                                    />
                                </div>
                                <div className="form__group-50">
                                    <label htmlFor="password" className="form__label-custom">Password</label>
                                    <input type="password" name="password" id="password"
                                           autoComplete="off"
                                           className={(errors.password)?"form__input --theme --error-valid":"form__input --theme" }
                                           value={data.password}
                                           onChange={this.onChangeHandler}
                                    />
                                </div>
                                <div className="form__group">
                                    {(errors.global) ? <span className='credential-error'>Invalid credentials</span> : ""}
                                    <button type="submit" className="btn btn-secondary">
                                        <div className={(!loading) ? 'lds-ellipsis hidden': "lds-ellipsis"}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        {(!loading) ? 'Sign in': ""}
                                    </button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AdminAuth.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    adminLogin: PropTypes.func.isRequired
};

export default connect(null, {adminLogin})(AdminAuth);
