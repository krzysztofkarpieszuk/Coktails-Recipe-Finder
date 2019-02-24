import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import {HashRouter, Route, Switch} from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import SearchPage from './pages/SearchPage';
import ShowAllPage from './pages/ShowAllPage';
import {db} from './firebase';

import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from './layout/Footer';
import './scss/style.scss';

class App extends Component {
	constructor(props) {
		super(props);

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
						<Menu />
						<Switch>
							<Route exact path="/" render={() => <HomePage drinksList={drinksList} />} />
							<Route
								path="/recipe-box/:drinkId"
								render={(routeProps) => <RecipePage {...routeProps} drinksList={drinksList} />}
							/>
							<Route path="/search" render={() => <SearchPage drinksList={drinksList} />} />
							<Route path="/show-all" render={() => <ShowAllPage drinksList={drinksList} />} />
						</Switch>
						<Footer />
					</div>
				</HashRouter>
			);
		}
	}
}

export default App;
