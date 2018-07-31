import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="coder">
          <Header />

          <h1 className="page-title">розробка сайтів</h1>

          <Footer />
      </div>
    );
  }
}

export default App;
