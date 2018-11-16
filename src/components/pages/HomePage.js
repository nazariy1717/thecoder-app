import React, {Component} from 'react';

import FirstScreen from '../elements/FirstScreen/FirstScreen';
import OurWorks from '../elements/OurWorks/OurWorks';
import Testimonials from '../elements/Testimonials/Testimonials';
import OurMission from '../elements/OurMission/OurMission';
import ContactUs from '../elements/ContactUs/ContactUs';
import Achievements from "../elements/TeamAchievements/Achievements";
import OurServices from "../elements/OurServices/OurServices";
import OurTeam from "../elements/OurTeam/OurTeam";
import OurClients from "../elements/OurClients/OurClients";
import Header from "../elements/Header/Header";
import Footer from "../elements/Footer/Footer";



class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);

    }

    render() {
        return (
            <div>
                <Header />
                <FirstScreen />
                <OurServices />
                <OurWorks />
                <OurClients />
                <OurTeam />
                <Achievements />
                <OurMission />
                <Testimonials />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default HomePage;