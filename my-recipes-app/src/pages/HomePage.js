import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Header from '../layout/Header';
import Menu from '../layout/Menu';
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
            <div class="bg-wrapper-home">
                <Header />
			<main class="app-home">
				<Menu />
                <HomeMainSection />
			</main>
                <Footer />
            </div>
		);
	}
}

export default HomePage;
