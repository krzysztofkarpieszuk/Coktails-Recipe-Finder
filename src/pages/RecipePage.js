import React from 'react';

const randomAddress = 'random';

function RecipeContent(props) {
	const {drinksList, address} = props;

	let randomIndex = 0;
	let selectedDrinks = drinksList.filter(drink => drink.id === parseInt(address));
	let selectedDrink = selectedDrinks[randomIndex];

	if (address === randomAddress) {
		randomIndex = Math.round(Math.random() * (drinksList.length - 1));
		selectedDrink = drinksList[randomIndex];
	}

	return (
		<section className="app-recipe__content">
			<DrinkInfo selectedDrink={selectedDrink} />
			<DrinkRecipe selectedDrink={selectedDrink} />
		</section>
	);
}

function DrinkInfo(props) {
	const {selectedDrink} = props;

	return (
		<div className="app-recipe__info">
			<h2 className="app-recipe__title">{selectedDrink.name}</h2>
			<p className="app-recipe__description">{selectedDrink.description}</p>
			<img className="app-recipe__image" src={selectedDrink.imgURL} alt="Drink" />
		</div>
	);
};

function DrinkRecipe(props) {
	const {selectedDrink} = props;

	let ingredient = selectedDrink.ingredients.map((ingredient, index) => {
		return <li key={`ingredient_${ingredient}${index}`}>{ingredient}</li>;
	});

	let step = selectedDrink.steps.map((step, index) => {
		return <li key={`step_${index}`}>{step}</li>;
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
	const address = props.match.params.drinkId;
	return (
		<div className="bg-wrapper-recipe">
			<main className="app-recipe">
				<RecipeContent address={address} drinksList={props.drinksList} />
			</main>
		</div>
	);
};

export default RecipePage;
