import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';

import HomePage from './components/pages/HomePage';
import ThanksPage from './components/pages/ThanksPage/ThanksPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


class App extends Component {
  render() {
    return (
        <div className="coder-app">
            <Header />
            <Switch >
                <Route path="/" exact component={HomePage} />
                <Route path="/thanks" exact component={ThanksPage} />
                <Route path="" component={NotFoundPage} />
            </Switch>

            <Footer />
        </div>
    );
  }
}

export default App;
