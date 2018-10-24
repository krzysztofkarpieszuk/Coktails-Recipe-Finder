import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

class Menu extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<nav className="app-menu">
				<ul className="app-menu__list">
					<li className="app-menu__item">
						<a href="#" className="app-menu__link">
							Home
						</a>
					</li>

					<li className="app-menu__item">
						<a href="#" className="app-menu__link">
							Inspire Yourself
						</a>
					</li>

					<li className="app-menu__item">
						<a href="#" className="app-menu__link">
							Search
						</a>
					</li>

					<li className="app-menu__item">
						<a href="#" className="app-menu__link">
							Get Random Recipe
						</a>
					</li>

					<li className="app-menu__item">
						<a href="#" className="app-menu__link">
							Show All Drinks
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
