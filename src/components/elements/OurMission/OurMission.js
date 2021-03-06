import React from "react";
import './our_mission.scss'

class OurMission extends React.Component{
    render(){
        return(
            <section className="our-mission" id="our-mission">
                <p className="our-mission__coder">details matter</p>
                <div className="container">
                    <div className="our-mission__title title-box">
                        <h2 className="title-box__inner">Mission Statement</h2>
                    </div>
                    <div className="quote">
                         <div className="quote__content">
                             <p className="app-txt">Our purpose is to enable individuals and companies of all sizes to have a well-functioning website while providing fluid browsing experience for visitors. We provide responsive, custom website design and development of any complexity and functionality tailored to each customer’s needs at reasonable cost. We believe that details matter at every stage of the project - from design to delivery and this commitment is represented in stellar customer satisfaction.</p>
                         </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurMission;