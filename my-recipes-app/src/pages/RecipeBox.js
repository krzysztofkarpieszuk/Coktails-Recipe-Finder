import React from 'react';
import Footer from '../layout/Footer';
import { db } from '../firebase';

// Component rendering box for recipe
class RecipeContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			address: this.props.address,
		};
	}

	render() {
		const randomIndex= Math.floor(Math.random() * (13 - 0 + 1) + 0) // Setting random number as index to find random recipe
		const { data, address } = this.state;

		// If data is not received yet show loader
		if (data === null) {
			return (
				<section className="app-recipe__content">
					<div className="loader">
						Loading
						<span />
					</div>
				</section>
			);
		}

		// If address is /recipe-box/random ---> after clicking on get random recipe in menu
		if (address == 'random') {
			return (
				<section className="app-recipe__content">
					<DrinkInfo data={data} randomIndex={randomIndex} />
					<DrinkRecipe data={data} randomIndex={randomIndex} />
				</section>
			);
		}

		// If address == drink, name set return new array with element with one specified drink with name in address
		const element = data.filter((e) => {
			return e.name == address;
		});

		// render recipe box with info and prescription for drink with name in address
		return (
			<section className="app-recipe__content">
				<DrinkInfo data={element} />
				<DrinkRecipe data={element} />
			</section>
		);
	}

	// Getting data from firebase
	componentDidMount() {
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

// Component rendering simple info about drink
class DrinkInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data, // data received with props
		//	randomIndex: this.props.randomIndex || 0 // random index received with props, if props is not received set randomIndex as 0
		};
	}

	render() {
		const { data } = this.state;
		const randomIndex = this.props.randomIndex || 0 ;
		const drink = data[randomIndex];

		return (
			<div className="drink-info">
				<h2 className="app-recipe__title">{drink.name}</h2>
				<p className="app-recipe__description">{drink.description}</p>
				<img src={drink.imgURL} alt="" />
			</div>
		);
	}
}

// Component rendering recipe for cocktail
class DrinkRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data, // data received with props
			randomIndex: this.props.randomIndex || 0 // random index received with props
		};
	}

	render() {
		const { data, randomIndex } = this.state;

		const drink = data[randomIndex];

		// map on array with ingredients ---> returns list item with ingredient
		let ingredient = drink.ingredients.map((e, i) => {
			return <li key={`ingredient${i}`}>{e}</li>;
		});

		// map on array with steps to prepare drink ---> returns list item with one step
		let step = drink.steps.map((e, i) => {
			return <li key={`step${i}`}>{e}</li>;
		});

		return (
			<div className="app-recipe__drink">
				<article className="app-recipe__ingredients">
					<h3>Ingredients</h3>
					<ul>{ingredient}</ul>
				</article>

				<article className="app-recipe_prescription">
					<h3>Steps</h3>
					<ol>{step}</ol>
				</article>
			</div>
		);
	}
}

// Component rendering page with recipe for drink
class RecipePage extends React.Component {
	constructor() {
		super();
	}

	render() {
		// console.log("this props",this.props)
		// if (this.props.menuOpen) {
		// 	this.props.hideMenu()
		// }

		// const address = this.props.url.match.params.drink; // :drink variable
		const address = this.props.match.params.drink
		return (
			<div className="bg-wrapper-recipe">
				<main className="app-recipe">
					<RecipeContent address={address} />
				</main>
				<Footer />
			</div>
		);
	}
}

export default RecipePage;
