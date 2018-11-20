import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import RecipePage from './pages/RecipeBox';
import SearchPage from './pages/SearchPage';
import ShowAllPage from './pages/ShowAllPage';
import { db } from './firebase';

import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from './layout/Footer';
import './scss/style.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null
		};
	}

	componentDidMount() {
		if (!this.state.data) {
			db.collection('cocktails').get().then((response) => {
				let received = [];
				response.docs.forEach((element) => {
					received.push(element.data()); // pushing received data to an empty array
				});

				this.setState({
					data: received // setting received data as data state
				});
			});
		}
	}

	render() {

		const {data} = this.state;

		if (!data) {
			return null
		}

		else {
			return (
			<HashRouter>
				<div>
					<Header />
					<Menu />
					<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/recipe-box/:drink" render={(routeProps) => <RecipePage {...routeProps} data={data}/>} />
					<Route path="/search" render={() => <SearchPage data={data} />} />
					<Route path="/show-all" render={() => <ShowAllPage data={data} />} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		);
		}

	}
}

export default App;
