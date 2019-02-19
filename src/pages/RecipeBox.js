import React from 'react';

class RecipeContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data
		};
	}

	render() {
		const { data } = this.state;
		const randomIndex = Math.floor(Math.random() * (data.length - 1 + 1) + 0);

		if (this.props.address === 'random') {
			return (
				<section className="app-recipe__content">
					<DrinkInfo data={data} randomIndex={randomIndex} />
					<DrinkRecipe data={data} randomIndex={randomIndex} />
				</section>
			);
		}

		const element = data.filter((e) => {
			return e.name === this.props.address;
		});

		return (
			<section className="app-recipe__content">
				<DrinkInfo data={element} />
				<DrinkRecipe data={element} />
			</section>
		);
	}
}

function DrinkInfo(props) {
	const randomIndex = props.randomIndex || 0;
	const drink = props.data[randomIndex];

	return (
		<div className="app-recipe__info">
			<h2 className="app-recipe__title">{drink.name}</h2>
			<p className="app-recipe__description">{drink.description}</p>
			<img className="app-recipe__image" src={drink.imgURL} alt="Drink" />
		</div>
	);
};

function DrinkRecipe(props) {
	const randomIndex = props.randomIndex || 0;
	const drink = props.data[randomIndex];

	let ingredient = drink.ingredients.map((e, i) => {
		return <li key={`ingredient${i}`}>{e}</li>;
	});

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

function RecipePage(props) {
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
