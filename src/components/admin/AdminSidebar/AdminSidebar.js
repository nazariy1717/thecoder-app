import React, {Component} from 'react';
import './admin-sidebar.scss';
import logo from './logo.svg';

class AdminSidebar extends Component{
    render(){
        return(
            <div className="admin-sidebar">
                <img src={logo} alt="coder-logo" className="admin-sidebar__image"/>
                <ul className="admin-sidebar__list">
                    <li className="admin-sidebar__item">
                        <a href="/" className="admin-sidebar__link">Dashboard</a>
                    </li>
                    <li className="admin-sidebar__item">
                        <a href="/" className="admin-sidebar__link active">Blog</a>
                    </li>
                    <li className="admin-sidebar__item">
                        <a href="/" className="admin-sidebar__link">Blog</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AdminSidebar;