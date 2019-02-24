import React from 'react';
import { Link } from 'react-router-dom';

export function SearchResults(props) {

	const drink = props.drinksList.map(drink => {
		const url= `url(${drink.imgURL})`;
		const address = `/recipe-box/${drink.id}`;
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
			searchValue: ''
		};
	}

	handleInputSearch = event => {
		this.setState({
			searchValue: event.target.value
		});
	};

	render() {
			const {searchValue} = this.state;

			const foundItems = this.props.drinksList.filter(drink => {
				const typedValue = `^${searchValue.toLocaleLowerCase()}`;
				const char = new RegExp(typedValue, "g");
				return !!drink.tags.some(tag => tag.toLocaleLowerCase().match(char));
			});

			return (
				<section className="app-search__content">
					<h2 className="app-search__title">Find Your Drink</h2>
					<input
						type="search"
						className="app-search__input"
						placeholder="Type name or alcohol..."
						onChange={this.handleInputSearch}
						value={searchValue}
					/>

					{searchValue !== "" && <SearchResults drinksList={foundItems}/>}
				</section>
			);

	}
}

function SearchPage(props) {
	return (
		<div className="bg-wrapper-home">
			<main className="app-search">
				<SearchMainContent drinksList={props.drinksList} />
			</main>
		</div>
	);
}


export default SearchPage;
