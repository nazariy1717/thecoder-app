import React, {Component} from 'react';
import { Helmet } from "react-helmet";

import MemberData from "./MemberData";

import "./member-data.scss";

class MemberPage extends Component {

    constructor(props){
        super(props);
        this.state={
            member: {
                "name":"",
                "role":"",
                "linkedin":"",
                "image_1":"",
                "image_2":"",
                "text":"",
                "fact":"",
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let urlSlug = this.props.match.params.member;
        let member = MemberData.filter(function(item){
            return item.slug === urlSlug;
        });
        this.setState({
            member: member[0]
        });
    }

    render() {
        console.log(this.state.member);
        let teamMember = this.state.member;
        return (
            <div>
                <Helmet>
                    <title>{teamMember.name} | {teamMember.role}</title>
                </Helmet>
                <div className="team-member">
                    <div className="container">
                        <div className="team-member__block">
                            <div className="row m-row align-middle">
                                <div className="column col-lg-6 team-member__image-column">
                                    <div className="team-member__image">
                                        <img src={teamMember.image_1} alt="" className="image"/>

                                    </div>
                                </div>
                                <div className="column col-lg-6 team-member__title-column">
                                    <div className="team-member__content">
                                        <div className="title-box">
                                            <h1 className="team-member__name title-box__inner">{teamMember.name}</h1>
                                        </div>
                                        <span className="team-member__role">
                                            {teamMember.role}
                                            <a href={teamMember.linkedin} aria-label="THE CODER linkedin"
                                               className="team-member__linkedin"
                                               target="_blank" rel="nofollow noopener noreferrer">
                                                <span className="icon-linkedin2"></span>
                                                <span className="icon-linkedin2"></span>
                                            </a>
                                        </span>
                                        <p className="team-member__txt" dangerouslySetInnerHTML={{__html: teamMember.text}}></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-member__block">
                            <div className="row m-row align-middle">
                                <div className="column col-md-3">
                                    <span className="team-member__fact">Fun fact:</span>
                                </div>
                                <div className="column col-md-9">
                                    <p className="team-member__txt --no-margin" dangerouslySetInnerHTML={{__html: teamMember.fact}}></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MemberPage;