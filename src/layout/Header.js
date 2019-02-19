import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

function Header(props) {
	const openClass = props.mobileMenuOpen ? 'open' : '';

	return (
		<header className="app-header">
			<div className="container">
			<div className="navTrigger">
				<div className={`wrapper-menu ${openClass}`} onClick={props.onHamburgerClick}>
					<div className="line-menu half start" />
					<div className="line-menu" />
					<div className="line-menu half end" />
				</div>
			</div>
				<Link to="/" className="app-header__logo">Drinkello</Link>
			</div>
		</header>
	)
}


const mapStateToProps = state => {
	return {
		mobileMenuOpen: state.menu.isMobileMenuOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onHamburgerClick: () => dispatch({ type: actionTypes.TOGGLE_MENU })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
