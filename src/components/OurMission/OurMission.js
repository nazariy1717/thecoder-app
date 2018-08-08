import React from "react";
import './our_mission.scss'

class OurMission extends React.Component{

    render(){
        return(
            <section className="our-mission">
                <div className="container">
                    <div className="title-box">
                        <p>
                            <strong>
                                <span>н</span>
                                <span>а</span>
                                <span>ш</span>
                                <span>а</span>
                            </strong>
                            <span>ш</span>
                            <span>р</span>
                            <span>в</span>
                            <span>ц</span>
                            <span>ф</span>
                        </p>
                        <p>
                            <strong>
                                <span>м</span>
                                <span>і</span>
                                <span>с</span>
                                <span>і</span>
                                <span>я</span>
                            </strong>
                            <span>л</span>
                            <span>а</span>
                            <span>д</span>
                            <span>у</span>
                            <span>з</span>
                            <span>і</span>
                        </p>
                        <h2 className="title-box__hidden">Наша місія</h2>
                    </div>

                    <div className="quote">
                         <div className="quote__content">
                             <p className="app-txt">Наша місія – подбати про кінцевого користувача. Зробити його життя простішим і зручнішим навіть в найменших деталях.</p>
                             <p className="app-txt">Ми створюємо продукт не для власників компаній, а для їхніх клієнтів.</p>
                             <p className="app-txt">Це наш приорітет №1</p>
                         </div>
                        <div className="quote__author">

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurMission;