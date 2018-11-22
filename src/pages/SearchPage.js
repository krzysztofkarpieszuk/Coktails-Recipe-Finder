import React from 'react';
import { Link } from 'react-router-dom';

// Rendering search result
const SearchResults = (props) => {

	const drink = props.data.map((e, i) => {
		const url= `url(${e.imgURL})`
		const address = `/recipe-box/${e.name}`
		return (
			<div className="result-box" key={i} style={{ backgroundImage: url }}>
				<Link to={address} className="result-link">
					<div className="result-info">{e.name}</div>
				</Link>
			</div>
		);
	});

	return <div className="app-search__results">{drink}</div>;
}


// Component rendering box for finder
class SearchMainContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
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
					<h2 className="app-search__title">Find Your Drink</h2>
					<input
						type="search"
						name=""
						id=""
						className="app-search__input"
						placeholder="Type name or alcohol..."
						onChange={this.handleInputSearch}
						value={searchValue}
					/>

					{searchValue !== "" && <SearchResults data={foundItems}/>}
				</section>
			);

	}
}

// Component rendering Search Page with finder
const SearchPage = (props) => {
	return (
		<div className="bg-wrapper-home">
			<main className="app-search">
				<SearchMainContent data={props.data} />
			</main>
		</div>
	);
}


export default SearchPage;
