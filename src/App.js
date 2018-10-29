import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { HashRouter, Route, Switch	 } from 'react-router-dom';
import RecipePage from './pages/RecipeBox';
import SearchPage from './pages/SearchPage';
import ShowAllPage from './pages/ShowAllPage';

import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from './layout/Footer';
import './scss/style.scss';

class App extends Component {
	constructor(props) {
    super(props);

		this.state = {
      menuOpen: false
		};
  }

  toggleMobileMenu = (menuOpen) => {
    this.setState({
      menuOpen
    })
  }


	render() {
		return (
			<HashRouter>
				<div>
					<Header toggleMobileMenu={this.toggleMobileMenu} />
					<Menu menuOpen={this.state.menuOpen} />
					<Switch>
						<Route exact path="/" component={HomePage} />
						 <Route path="/recipe-box/:drink" component={RecipePage} />
						<Route path="/search" component={SearchPage} />
						<Route path="/show-all" component={ShowAllPage} />
					</Switch>
					<Footer />
				</div>
			</HashRouter>
		);
	}
}

export default App;
