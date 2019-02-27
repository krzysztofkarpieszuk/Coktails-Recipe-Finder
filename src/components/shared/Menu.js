import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(props) {
	const openClass = props.mobileMenuStatus ? 'active-menu' : '';

	return (
		<nav className={`app-menu ${openClass}`}>
			<ul className="app-menu__list">

				<li className="app-menu__item" onClick={props.handleMenuItemClick}>
					<Link to="/search" className="app-menu__link">
						Search
					</Link>
				</li>

				<li className="app-menu__item" onClick={props.handleMenuItemClick}>
					<Link to="/recipe-box/random" className="app-menu__link">
						Get Random Recipe
					</Link>
				</li>

				<li className="app-menu__item" onClick={props.handleMenuItemClick}>
					<Link to="/show-all" className="app-menu__link">
						Show All Drinks
					</Link>
				</li>
			</ul>
		</nav>
	);
};
