import React from 'react';
import { Switch,Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';

import HomePage from './components/pages/HomePage';
import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = ({ location}) =>(

    <div className="coder-app">
        <Header />
        <Switch  >
            <Route path="/" exact location={location} component={HomePage} />
            <Route path="/thanks" location={location} component={ThanksPage} />
            <Route location={location} component={NotFoundPage} />
        </Switch>

        <Footer />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
