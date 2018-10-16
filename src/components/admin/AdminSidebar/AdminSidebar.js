import React, {Component} from 'react';
import './admin-sidebar.scss';

class AdminSidebar extends Component{
    render(){
        return(
            <div className="admin-sidebar">
                <ul className="admin-sidebar__list">
                    <li className="admin-sidebar__item">
                        <a href="/" className="admin-sidebar__link">Blog</a>
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