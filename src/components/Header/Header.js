import React from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import { TweenMax }  from "gsap";

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

    componentDidMount(){
        this.animateClose();
    }

    animateOpen(){
        console.log('open');
        TweenMax.to(".menu", 0.4, {opacity: 1, display:'block' });
        TweenMax.staggerTo(".menu__link", 0.35, {
            opacity: 1,
            y: 0,
            delay: 0.25,
        }, 0.12);
        TweenMax.staggerTo(".menu-soc__link", 0.35, {
            opacity: 1,
            y: 0,
            delay: 0.75,
        }, 0.2);
    }

    animateClose(){
        console.log('close');
        TweenMax.to(".menu", 0.4, {
            opacity: 0,
            delay: 1,
            clearProps:"display"
        });
        TweenMax.staggerTo(".menu__link", 0.35, {
            opacity: 0,
            y: 35,
        }, 0.12);
        TweenMax.staggerTo(".menu-soc__link", 0.35, {
            opacity: 0,
            y: 35,
            delay: 0.35,
        }, 0.2);
    }

    toggleHamburger = () => {
        this.setState(
            (prevState) => {
                return {
                    isHamburgerActive: !prevState.isHamburgerActive
                };
            });
        if(this.state.isHamburgerActive){
            this.animateClose();
        } else {
            this.animateOpen();
        }
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
                        <Hamburger click={this.toggleHamburger}
                                   show={this.state.isHamburgerActive}/>
                    </div>
                </header>
                <Menu show={this.state.isHamburgerActive}/>
            </div>
        )
    }
}


export default Header;