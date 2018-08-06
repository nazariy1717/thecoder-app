import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageScreen from './components/layout/PageScreen';
import ContactUs from './components/ContactUs/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="coder">
          <Header />

          <PageScreen />

          <ContactUs />
          <Footer />
      </div>
    );
  }
}

export default App;
