import React from 'react';
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import Footer from '../layout/Footer';

class ResultBox extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="result-box">
				<a href="">
					<div class="result-info">Negroni</div>
				</a>
			</div>
		);
	}
}

class SearchResults extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="app-search__results">
				<ResultBox />
			</div>
		);
	}
}

class SearchMainContent extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section class="app-search__content">
				<h2>Find Your Drink</h2>
				<input type="search" name="" id="" class="app-search__input" placeholder="Start typing..." />
                <SearchResults />
			</section>
		);
	}
}

class SearchPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bg-wrapper-search">
				<Header />
				<main class="app-search">
					<Menu />
                    <SearchMainContent />
				</main>
                <Footer />
			</div>
		);
	}
}

export default SearchPage;