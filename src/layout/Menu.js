import React from 'react';
// import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

class Menu extends React.Component {
	constructor(props) {
		super(props);

	}

	// handleSelect = e => {
	// 	this.menu.classList.toggle("active-menu")
	// }

	render() {

		const classElement = this.props.menuOpen ? "active-menu" : "";

		console.log(this.props.menuOpen)
		return (
			<nav className={`app-menu ${classElement}`} ref={element => this.menu = element}>
				<ul className="app-menu__list">
					<li className="app-menu__item">
						<NavLink to="/" className="app-menu__link" handleClick={this.handleSelect}>
							Home
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/search" className="app-menu__link" handleClick={this.handleSelect}>
							Search
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/recipe-box/random" className="app-menu__link" handleClick={this.handleSelect}>
							Get Random Recipe
						</NavLink>
					</li>

					<li className="app-menu__item">
						<NavLink to="/show-all" className="app-menu__link" handleClick={this.handleSelect}>
							Show All Drinks
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
