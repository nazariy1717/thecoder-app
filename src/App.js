import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FirstScreen from './components/FirstScreen/FirstScreen';
import OurWorks from './components/OurWorks/OurWorks';
import OurMission from './components/OurMission/OurMission';
import ContactUs from './components/ContactUs/ContactUs';
import Achievements from "./components/TeamAchievements/Achievements";

class App extends Component {
  render() {
    return (
      <div className="coder">
          <div className="trigger"></div>
          <Header />
          <FirstScreen />
          <OurWorks />
          <Achievements />
          <OurMission />
          <ContactUs />
          <Footer />
      </div>
    );
  }
}

export default App;
