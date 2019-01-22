import React, {Component} from 'react';
import { Helmet } from "react-helmet";

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
                <Helmet>
                    <title>THE CODER - Website development company</title>
                    <meta name="description" content="Our company is your trusted partner in creative website development, UX/UI design and branding. With specialists in the USA and overseas, your cost is guaranteed to be very competitive." />
                    <meta property="og:title" content="THE CODER - Website development company" />
                    <meta property="og:description" content="Our company is your trusted partner in creative website development, UX/UI design and branding. With specialists in the USA and overseas, your cost is guaranteed to be very competitive."/>
                    <meta property="og:url" content="https://thecoderdev.com"/>
                    <meta property="og:image" content="%PUBLIC_URL%/fav/og-sm.png" />
                    <meta property="og:image" content="%PUBLIC_URL%/fav/og.jpg" />
                    <meta property="og:image" content="%PUBLIC_URL%/fav/og-sm.png" />
                </Helmet>
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