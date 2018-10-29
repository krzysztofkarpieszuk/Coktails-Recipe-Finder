import React from 'react';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

class HomeMainSection extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="app-home__content">
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
					Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started.
				</p>
			</section>
		);
	}
}

class HomePage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
            <div className="bg-wrapper-home">
			<main className="app-home">
                <HomeMainSection />
			</main>
            </div>
		);
	}
}

export default HomePage;
