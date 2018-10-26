import React from 'react';
// import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

class Menu extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<nav className="app-menu">
				<ul className="app-menu__list">
					<li className="app-menu__item">
						<NavLink to="/" className="app-menu__link">
							Home
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="#" className="app-menu__link">
							Inspire Yourself
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/search" className="app-menu__link">
							Search
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/recipe-box/random" className="app-menu__link">
							Get Random Recipe
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/show-all" className="app-menu__link">
							Show All Drinks
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
