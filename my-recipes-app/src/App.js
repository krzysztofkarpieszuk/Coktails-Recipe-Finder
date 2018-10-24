import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import RecipePage from './pages/RecipeBox';
import SearchPage from './pages/SearchPage';

import Header from './layout/Header';
import Menu from './layout/Menu';
import './scss/style.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeMenuLink: null
    }
  }

  changeMenuLink = (activeLink) => {
    this.setState({
      activeMenuLink: activeLink
    })
  }
	render() {
		return <HashRouter>
        <div>
        <Header />
        <Menu />
          <Route exact path="/" component={HomePage} />
          <Route path="/recipe-box/:drink" component={RecipePage} />
          <Route path="/search" component={SearchPage} />
        </div>
    </HashRouter>;
	}
}

export default App;
