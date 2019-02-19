import React from 'react';
import { Link } from 'react-router-dom';

export function SearchResults(props) {

	const drink = props.data.map((drink, index) => {
		const url= `url(${drink.imgURL})`
		const address = `/recipe-box/${drink.name}`
		return (
			<div className="result-box" key={drink.id} style={{ backgroundImage: url }}>
				<Link to={address} className="result-link">
					<div className="result-info">{drink.name}</div>
				</Link>
			</div>
		);
	});

	return <div className="app-search__results">{drink}</div>;
}


class SearchMainContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
			searchValue: ''
		};
	}

	handleInputSearch = event => {
		this.setState({
			searchValue: event.target.value
		});
	};

	render() {
		const { data, searchValue } = this.state;

			const filter = this.state.searchValue;
			const foundItems = data.filter(drink => {
				let typedValue = `^${filter.toLocaleLowerCase()}`;
				let char = new RegExp(typedValue, "g");

				let matchingDrinks = [];
				drink.tags.forEach(tag => {
					if (tag.toLocaleLowerCase().match(char) != null ) {
						matchingDrinks.push(drink);
					}
				});

				return matchingDrinks;
			});

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

function SearchPage(props) {
	return (
		<div className="bg-wrapper-home">
			<main className="app-search">
				<SearchMainContent data={props.data} />
			</main>
		</div>
	);
}


export default SearchPage;
