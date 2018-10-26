import React from 'react';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Footer from '../layout/Footer';

class HomeMainSection extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="app-home__content">
				<h2 className="app-home__title">Welcome to Cocktails Recipes Finder </h2>
				<p className="app-home__description">
					You can find here recipes for classic drinks. Please select an option from menu.
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
                <Footer />
            </div>
		);
	}
}

export default HomePage;
