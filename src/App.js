import React from 'react';
import { Switch,Route } from 'react-router-dom';
import UserRoute from "./components/routes/UserRoute";


import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage/BlogPage';
import PostPage from './components/pages/PostPage/PostPage';

import AdminAuth from './components/admin/AdminAuth/AdminAuth';

import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = () =>(
    <div className="coder-app">
        <Switch>

            <UserRoute exact path="/" component={HomePage} />
            <UserRoute exact path="/blog" component={BlogPage} />
            <UserRoute path="/blog/:post" component={PostPage} />

            <Route exact path="/coder-admin" component={AdminAuth} />

            <UserRoute path="/thanks" component={ThanksPage} />
            <UserRoute component={NotFoundPage} />

        </Switch>
    </div>
);

export default App;
