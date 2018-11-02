import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Menu = (props) => {
	const openClass = props.mobileMenu ? 'active-menu' : '';

	return (
		<nav className={`app-menu ${openClass}`}>
			<ul className="app-menu__list">
				<li className="app-menu__item" onClick={props.onLinkSelect}>
					<Link to="/" className="app-menu__link">
						Home
					</Link>
				</li>

				<li className="app-menu__item" onClick={props.onLinkSelect}>
					<Link to="/search" className="app-menu__link">
						Search
					</Link>
				</li>

				<li className="app-menu__item" onClick={props.onLinkSelect}>
					<Link to="/recipe-box/random" className="app-menu__link">
						Get Random Recipe
					</Link>
				</li>

				<li className="app-menu__item" onClick={props.onLinkSelect}>
					<Link to="/show-all" className="app-menu__link">
						Show All Drinks
					</Link>
				</li>
			</ul>
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		mobileMenu: state.menu.isMenuOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLinkSelect: () => dispatch({ type: actionTypes.SELECT_LINK})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
