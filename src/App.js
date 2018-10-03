import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import HomePage from './components/pages/HomePage';
import Notifications from "react-notify-toast";


class App extends Component {
  render() {
    return (
        <div className="coder-app">
            <Notifications />
            <Header />
            <Route path="/" exact component={HomePage} />
            <Footer />
        </div>
    );
  }
}

export default App;
