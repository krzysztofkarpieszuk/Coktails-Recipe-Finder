import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import variables from '../../scss/utilities/_variables.scss';
import Menu from "./Menu";
import MobileMenuTrigger from './MobileMenuTrigger';
import {connect} from 'react-redux';
import * as actionTpes from '../../store/actions/finder';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobileMenuOpen: false
        }
    }

    handleMenuClosing = () => {
        this.setState({ isMobileMenuOpen: false });
        this.props.onCloseFinderBtnClick();
    };

    handleNavTriggerButton = () => {
        this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen});
        this.props.onCloseFinderBtnClick();
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
                        <Link to="/" className="app-header__logo"
                              onClick={this.props.onCloseFinderBtnClick}>Drinkello</Link>
                        <div className="app-header__items">
                            <button className="finder-trigger"
                                    onClick={this.props.onFinderButtonClick}>
                                <span className="finder-trigger__icon">
                                    <i className="fas fa-search"></i>
                                </span>
                            </button>
                            <Menu mobileMenuStatus={isMobileMenuOpen} handleMenuItemClick={this.handleMenuClosing} />
                            <MobileMenuTrigger mobileMenuStatus={isMobileMenuOpen} toggleMobileMenu={this.handleNavTriggerButton} />
                        </div>
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

    componentWillUnmount() {
        if (!this.matchDesktop) {
            return;
        }
        this.matchDesktop.removeEventListener(this.checkWindowWidth);
    }
}

const mapStateToProps = state => {
    return {
        isFinderOpen: state.finder.isFinderOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFinderButtonClick: () => dispatch({ type: actionTpes.OPEN_FINDER }),
        onCloseFinderBtnClick: () => dispatch({type: actionTpes.CLOSE_FINDER})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
