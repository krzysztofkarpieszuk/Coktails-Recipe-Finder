import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from "../store/actions";

function MobileMenuTrigger(props) {
    const openClass = props.mobileMenuOpen ? 'open' : '';

    return (
        <div className="mobile-menu-trigger" onClick={props.onHamburgerClick}>
            <div className={`mobile-menu-trigger__wrapper ${openClass}`}>
                <div className="mobile-menu-trigger__line half start" />
                <div className="mobile-menu-trigger__line" />
                <div className="mobile-menu-trigger__line half end" />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mobileMenuOpen: state.menu.isMobileMenuOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onHamburgerClick: () => dispatch({type: actionTypes.TOGGLE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuTrigger);
