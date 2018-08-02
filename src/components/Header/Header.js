import React from 'react';
import Hamburger from './Hamburger';

import './header.scss';
import logo from './logo-head.svg';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.toggleActive = this.toggleHamburger.bind(this);
    }

    state = {
        isHamburgerActive: false
    };

    toggleHamburger = () => {
        this.setState(
            (prevState) => {
                return {isHamburgerActive: !prevState.isHamburgerActive
            };
        });
        console.log(this.state.isHamburgerActive);
    };

    render() {
        return (
            <header className="header">
                <div className="header__container container">

                    <a href="/" className="header__logo">
                        <img src={logo} alt="coder logo" className="image"/>
                    </a>

                    <Hamburger click={this.toggleHamburger} show={this.state.isHamburgerActive}/>

                </div>
            </header>
        )
    }
}


export default Header;