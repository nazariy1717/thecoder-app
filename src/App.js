import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';

import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage/BlogPage';

import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = () =>(
    <div className="coder-app">
        <Header />
        <Switch  >
            <Route exact path="/" component={HomePage} />
            <Route path="/blog" component={BlogPage} />


            <Route path="/thanks" component={ThanksPage} />
            <Route component={NotFoundPage} />

        </Switch>
        <Footer />
    </div>
);

export default App;
