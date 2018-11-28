import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from './../../components/elements/Header/Header';
import Footer from './../../components/elements/Footer/Footer';

const UserRoute = ({ component: Component, ...rest}) => (
    <Route {...rest}  render={ props=>
        <div>
            <Header/>
            <Component {...props} />
            <Footer />
        </div>
    }/>
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
};

export default UserRoute;