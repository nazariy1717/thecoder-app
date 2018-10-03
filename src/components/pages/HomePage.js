import React, {Component} from 'react';

import FirstScreen from '../elements/FirstScreen/FirstScreen';
import OurWorks from '../elements/OurWorks/OurWorks';
import OurMission from '../elements/OurMission/OurMission';
import ContactUs from '../elements/ContactUs/ContactUs';
import Achievements from "../elements/TeamAchievements/Achievements";
import OurServices from "../elements/OurServices/OurServices";


class HomePage extends Component {
    render() {
        return (
            <div>
                <FirstScreen />
                <OurServices />
                <OurWorks />
                <Achievements />
                <OurMission />
                <ContactUs />
            </div>
        );
    }
}

export default HomePage;