import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ConnectedMenu from "./Menu";
import ConnectedMobileMenuTrigger from './MobileMenuTrigger'
import * as actionTypes from "../store/actions";

function Header(props) {
    const openClass = props.mobileMenuOpen ? 'toggle' : '';

    function handleMobileMenuOverlayClick(event) {
        event.stopPropagation();
        props.onMobileMenuOverlayClick();
    };

    return (
        <div>
            <div className={`opened-mobile-menu-overlay ${openClass}`}
                 onClick={(event) => handleMobileMenuOverlayClick(event)}/>
            <header className="app-header">
                <div className="container">
                    <ConnectedMenu />
                    <ConnectedMobileMenuTrigger />
                    <Link to="/" className="app-header__logo">Drinkello</Link>
                </div>
            </header>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        mobileMenuOpen: state.menu.isMobileMenuOpen
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMobileMenuOverlayClick: () => dispatch({ type: actionTypes.TOGGLE_MENU})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
