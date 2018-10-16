import React, {Component} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AdminHeader from '../AdminHeader/AdminHeader';

import '../admin.scss';


class AdminDashboard extends Component{
    render(){
        return(
            <div className="admin-wrapper">
                <AdminSidebar />
                <div className="admin-content">
                    <AdminHeader />
                </div>
            </div>
        )
    }
}

export default AdminDashboard;
