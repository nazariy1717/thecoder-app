import React, {Component} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';

import '../admin.scss';


class AdminDashboard extends Component{
    render(){
        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <div className="admin-content">

                </div>
            </div>
        )
    }
}

export default AdminDashboard;
