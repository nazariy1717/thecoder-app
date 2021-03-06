import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AdminRoute from "./components/routes/AdminRoute";
import UserRoute from "./components/routes/UserRoute";


import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage/BlogPage';
import PostPage from './components/pages/PostPage/PostPage';
import MemberPage from './components/pages/MemberPage/MemberPage';

import ToolsPage from './components/pages/Tools/ToolsPage';
import ToolPage from './components/pages/Tools/ToolPage';

import AdminAuth from './components/admin/AdminAuth/AdminAuth';
import AdminDashboard from './components/admin/AdminDashboard/AdminDashboard';
import AdminEditor from './components/admin/AdminEditor/AdminEditor';

import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = (location) =>(
    <div className="coder-app">
        <Switch>

            <UserRoute exact path="/" component={HomePage} />
            <UserRoute exact path="/blog" component={BlogPage} />
            <UserRoute exact path="/blog/:post" component={PostPage} />

            <UserRoute exact path="/team/:member" component={MemberPage} />

            <UserRoute exact path="/tools" component={ToolsPage} />
            <UserRoute exact path="/tools/:tool" component={ToolPage} />

            <UserRoute exact path="/admin" location={location} component={AdminAuth} />
            <AdminRoute exact path="/admin/dashboard" location={location} component={AdminDashboard} />
            <AdminRoute exact path="/admin/editor" location={location} component={AdminEditor} />

            <UserRoute exact path="/thanks" component={ThanksPage} />
            <UserRoute exact path="/privacy-policy" component={PrivacyPolicy} />
            <UserRoute component={NotFoundPage} />

        </Switch>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
