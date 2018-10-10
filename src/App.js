import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';

import HomePage from './components/pages/HomePage';
import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import BlogPage from './components/pages/BlogPage/BlogPage';


import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = () =>(
    <div className="coder-app">
        <Header />
        <Switch  >
            <Route exact path="/" component={HomePage} />
            <Route path="/thanks" component={ThanksPage} />

            <Route path="/blog" component={BlogPage} />
        </Switch>
        <Footer />
    </div>
);

export default App;
