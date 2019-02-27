import React, {Component} from 'react';
import HomePageComponent from './components/HomePageComponent';
import {HashRouter, Route, Switch} from 'react-router-dom';
import RecipePageComponent from './components/RecipePageComponent';
import SearchPageComponent from './components/SearchPageComponent';
import AllDrinksPageComponent from './components/AllDrinksPageComponent';
import {db} from './firebase';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import './scss/style.scss';

class App extends Component {
	constructor() {
		super();

		this.state = {
			drinksList: null
		};
	}

	componentDidMount() {
		if (!this.state.drinksList) {
			db.collection('cocktails').get().then((response) => {
				let received = [];
				response.docs.forEach((element) => {
					received.push(element.data());
				});

				this.setState({
					drinksList: received
				});
			});
		}
	}

	render() {
		const { drinksList } = this.state;

		if (!drinksList) {
			return (
				<div className="loader">
					<div className="sk-folding-cube">
						<div className="sk-cube1 sk-cube" />
						<div className="sk-cube2 sk-cube" />
						<div className="sk-cube4 sk-cube" />
						<div className="sk-cube3 sk-cube" />
					</div>
				</div>
			);
		} else {
			return (
				<HashRouter>
					<div>
						<Header />
						<Switch>
							<Route exact path="/" render={() => <HomePageComponent drinksList={drinksList} />} />
							<Route
								path="/recipe-box/:drinkId"
								render={(routeProps) => <RecipePageComponent {...routeProps} drinksList={drinksList} />}
							/>
							<Route path="/search" render={() => <SearchPageComponent drinksList={drinksList} />} />
							<Route path="/show-all" render={() => <AllDrinksPageComponent drinksList={drinksList} />} />
						</Switch>
						<Footer />
					</div>
				</HashRouter>
			);
		}
	}
}

export default App;
