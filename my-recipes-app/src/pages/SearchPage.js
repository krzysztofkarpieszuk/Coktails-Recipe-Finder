import React from 'react';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Footer from '../layout/Footer';
import Drinks from '../database';
import { db } from '../firebase';



// Rendering search result
const SearchResults = (props) => {

	const drink = props.data.map((e, i) => {
		const url= `url(${e.imgURL})`
		const address = `/recipe-box/${e.name}`
		return (
			<div className="result-box" style={{ backgroundImage: url }}>
				<Link to={address}>
					<div className="result-info">{e.name}</div>
				</Link>
			</div>
		);
	});

	return <div className="app-search__results">{drink}</div>;
}


// Component rendering box for finder
class SearchMainContent extends React.Component {
	constructor() {
		super();

		this.state = {
			data: null,
			searchValue: ''
		};
	}

	// Function setting state with value from input on change
	handleInputSearch = (e) => {
		this.setState({
			searchValue: e.target.value
		});
	};

	render() {
		const { data, searchValue } = this.state;

		if (data === null) {
			return (
				// If data is not received yet show loader
				<section className="app-recipe__content">
					<div className="loader">
						Loading
						<span />
					</div>
				</section>
			);
		} else {

			// Filtering received data depending on serach input value;
			const filter = this.state.searchValue;
			const foundItems = data.filter((element) => {
				let typedValue = `^${filter.toLocaleLowerCase()}`;
				let char = new RegExp(typedValue, "g");

				// itering through array of tags and checking if typed value matches tag
				for (let i = 0; i < element.tags.length; i++) {
					if ( element.tags[i].toLocaleLowerCase().match(char) != null ) {
						return element
					}
				}
			});


			// Renders search box if data is already received
			return (
				<section className="app-search__content">
					<h2>Find Your Drink</h2>
					<input
						type="search"
						name=""
						id=""
						className="app-search__input"
						placeholder="Start typing..."
						onChange={this.handleInputSearch}
						value={searchValue}
					/>

					{searchValue != "" && <SearchResults data={foundItems}/>}
				</section>
			);
		}
	}

	componentDidMount() {

		// Getting data from database
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

// Component rendering Search Page with finder
class SearchPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bg-wrapper-search">
				<main className="app-search">
					<SearchMainContent />
				</main>
				<Footer />
			</div>
		);
	}
}

export default SearchPage;
