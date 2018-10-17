import React, {Component} from 'react';
import './admin-header.scss';

 class AdminHeader extends Component{
    render(){
        return(
            <div className="admin-header row align-middle align-justify">
                <div className="column">
                    <h1 className="admin-header__title">The Coder Admin Dashboard</h1>
                </div>
                <div className="column">
                    <a href="/" className="admin-header__out">sign out</a>
                </div>
            </div>
        )
    }
}

export default AdminHeader;