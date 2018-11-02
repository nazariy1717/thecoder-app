import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './admin-sidebar.scss';
import logo from './logo.svg';

class AdminSidebar extends Component{
    render(){
        return(
            <div className="admin-sidebar">

                <img src={logo} alt="coder-logo" className="admin-sidebar__image"/>
                <ul className="admin-sidebar__list">
                    <li className="admin-sidebar__item">
                        <Link to="/" className="admin-sidebar__link">Main</Link>
                    </li>
                    <li className="admin-sidebar__item">
                        <Link to="/blog" className="admin-sidebar__link">Blog</Link>
                    </li>
                    <li className="admin-sidebar__item">
                        <NavLink to="/admin/dashboard" activeClassName="active" className="admin-sidebar__link">Posts</NavLink>
                    </li>
                    <li className="admin-sidebar__item">
                        <NavLink to="/admin/editor" activeClassName="active" className="admin-sidebar__link">Editor</NavLink>
                    </li>

                </ul>
            </div>
        )
    }
}

export default AdminSidebar;