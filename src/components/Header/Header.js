import React from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import TweenMax from "gsap";

import './header.scss';
import logo from './logo-head.svg';
import logo_white from './logo-head-white.svg';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    state = {
        isHamburgerActive: false
    };

    toggleHamburger = () => {

        if(this.state.isHamburgerActive){
            TweenMax.fromTo(".menu", 0.75,{
                opacity: 1
            },{
                opacity: 0
            });
        } else{
            TweenMax.fromTo(".menu", 0.75,{
                opacity: 0
            },{
                opacity: 1
            });

        }

        this.setState(
            (prevState) => {
                return {
                    isHamburgerActive: !prevState.isHamburgerActive
                };
        });






        console.log(this.state.isHamburgerActive);
    };




    render() {
        let headerClass = 'header';
        if (this.state.isHamburgerActive){
            headerClass = 'header --white';
        }
        return (
            <div className="coder-head">
                <header className={headerClass} >
                    <div className="header__container container">
                        <a href="/" className="header__logo ">
                            <img src={logo} alt="coder logo" className="image"/>
                            <img src={logo_white} alt="coder logo" className="image"/>
                        </a>
                        <Hamburger click={this.toggleHamburger} show={this.state.isHamburgerActive}/>
                    </div>
                </header>
                <Menu show={this.state.isHamburgerActive}/>
            </div>

        )
    }
}


export default Header;