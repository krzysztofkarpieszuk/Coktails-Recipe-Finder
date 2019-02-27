import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import variables from '../scss/modules/_variables.scss';
import Menu from "./Menu";
import MobileMenuTrigger from './MobileMenuTrigger';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isMobileMenuOpen: false
        }
    }

    handleMenuClosing = () => {
        this.setState({ isMobileMenuOpen: false });
    };

    handleNavTriggerButton = () => {
        this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen});
    };

    checkWindowWidth = (event) => {
        if (!this.state.isMobileMenuOpen) {
            return;
        }

        if (event.matches) {
            this.setState({ isMobileMenuOpen: false });
        }
    };



    render() {
        const { isMobileMenuOpen } = this.state;
        const openClass = this.state.isMobileMenuOpen ? 'toggle' : '';

        return (
            <div>
                <header className="app-header">
                    <div className="container">
                        <Menu mobileMenuStatus={isMobileMenuOpen} handleMenuItemClick={this.handleMenuClosing} />
                        <MobileMenuTrigger mobileMenuStatus={isMobileMenuOpen} toggleMobileMenu={this.handleNavTriggerButton} />
                        <Link to="/" className="app-header__logo">Drinkello</Link>
                    </div>
                    <div className={`opened-mobile-menu-overlay ${openClass}`}
                         onClick={this.handleMenuClosing}/>
                </header>
            </div>

        )
    }

    componentDidMount() {
        this.matchDesktop = window.matchMedia(`screen and (min-width: ${variables.desktopScreen}`);
        this.matchDesktop.addEventListener('change', this.checkWindowWidth);
    }

    componentWillMount() {
        if (!this.matchDesktop) {
            return;
        }
        this.matchDesktop.removeEventListener(this.checkWindowWidth);
    }
}

export default Header;
