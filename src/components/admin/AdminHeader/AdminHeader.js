import React from 'react';
import {adminLogout} from '../../../actions/admin';
import { connect } from 'react-redux';
import './admin-header.scss';

 const AdminHeader = ({ adminLogout}) => (
    <div className="admin-header row align-middle align-justify">
        <div className="column">
            <h1 className="admin-header__title">The Coder Admin Dashboard</h1>
        </div>
        <div className="column">
            <button type="button" className="btn admin-header__out" onClick={() => adminLogout()}>sign out</button>
        </div>
    </div>
);


export default connect(null, {adminLogout})(AdminHeader);