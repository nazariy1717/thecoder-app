import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const AdminRoute = ({ isAdminAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} render={ props => isAdminAuthenticated ? <Component {...props} /> : <Redirect to="/"/>} />
);

function mapStateToProps(state){
    return{
        isAdminAuthenticated: !!state.admin.token
    }
}

export default connect(mapStateToProps)(AdminRoute);