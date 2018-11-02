import React from 'react';
import {adminLogout} from '../../../actions/admin';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

import './admin-header.scss';
import logo from "./logo.svg";

 const AdminHeader = ({ adminLogout}) => (
    <div className="admin-header row align-middle align-justify">
        <div className="column">
            <Link to="/">
                <img src={logo} alt="coder-logo" className="admin-header__image"/>
            </Link>
        </div>
        <div className="column">
            <ul className="admin-header__list">
                <li className="admin-header__item">
                    <Link to="/" className="admin-sidebar__link">Main</Link>
                </li>
                <li className="admin-header__item">
                    <Link to="/blog" className="admin-header__link">Blog</Link>
                </li>
                <li className="admin-header__item">
                    <NavLink to="/admin/dashboard" activeClassName="active" className="admin-header__link">Posts</NavLink>
                </li>
                <li className="admin-header__item">
                    <NavLink to="/admin/editor" activeClassName="active" className="admin-header__link">Editor</NavLink>
                </li>
                <li className="admin-header__item">
                    <button type="button" className="btn admin-header__out" onClick={() => adminLogout()}>sign out</button>
                </li>
            </ul>
        </div>
    </div>
);


export default connect(null, {adminLogout})(AdminHeader);