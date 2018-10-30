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



class HomePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <FirstScreen />
                <OurServices />
                <OurWorks />
                <OurClients />
                <OurTeam />
                <Achievements />
                <OurMission />
                <Testimonials />
                <ContactUs />
            </div>
        );
    }
}

export default HomePage;