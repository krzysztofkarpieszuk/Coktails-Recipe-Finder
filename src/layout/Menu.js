import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
	const classElement = props.menuOpen ? 'active-menu' : '';

	return (
		<nav className={`app-menu ${classElement}`}>
			<ul className="app-menu__list">
				<li className="app-menu__item">
					<Link to="/" className="app-menu__link">
						Home
					</Link>
				</li>

				<li className="app-menu__item">
					<Link to="/search" className="app-menu__link">
						Search
					</Link>
				</li>

				<li className="app-menu__item">
					<Link to="/recipe-box/random" className="app-menu__link">
						Get Random Recipe
					</Link>
				</li>

				<li className="app-menu__item">
					<Link to="/show-all" className="app-menu__link">
						Show All Drinks
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
