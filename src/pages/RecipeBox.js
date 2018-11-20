import React from 'react';

// Component rendering box for recipe
class RecipeContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data
		};
	}

	render() {
		const randomIndex = Math.floor(Math.random() * (12 - 0 + 1) + 0); // Setting random number as index to find random recipe
		const { data } = this.state;

		// If address is /recipe-box/random ---> after clicking on get random recipe in menu
		if (this.props.address === 'random') {
			return (
				<section className="app-recipe__content">
					<DrinkInfo data={data} randomIndex={randomIndex} />
					<DrinkRecipe data={data} randomIndex={randomIndex} />
				</section>
			);
		}

		// If address == drink name set return new array with element with one specified drink with name in address
		const element = data.filter((e) => {
			return e.name === this.props.address;
		});

		// render recipe box with info and prescription for drink with name in address
		return (
			<section className="app-recipe__content">
				<DrinkInfo data={element} />
				<DrinkRecipe data={element} />
			</section>
		);
	}
}

const DrinkInfo = (props) => {
	const randomIndex = props.randomIndex || 0; // randomIndex received with props or 0 if props was not defined
	const drink = props.data[randomIndex];

	return (
		<div className="app-recipe__info">
			<h2 className="app-recipe__title">{drink.name}</h2>
			<p className="app-recipe__description">{drink.description}</p>
			<img className="app-recipe__image" src={drink.imgURL} alt="Drink" />
		</div>
	);
};

const DrinkRecipe = (props) => {
	const randomIndex = props.randomIndex || 0; // randomIndex received with props or 0 if props was not defined
	const drink = props.data[randomIndex];

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

			<article className="app-recipe__prescription">
				<h3>Steps</h3>
				<ol>{step}</ol>
			</article>
		</div>
	);
};

// Component rendering page with recipe for drink
const RecipePage = (props) => {
	const address = props.match.params.drink;
	return (
		<div className="bg-wrapper-recipe">
			<main className="app-recipe">
				<RecipeContent address={address} data={props.data} />
			</main>
		</div>
	);
};

export default RecipePage;
