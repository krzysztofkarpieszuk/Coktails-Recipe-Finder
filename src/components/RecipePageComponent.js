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
		<section className="main-section app-recipe">
			<DrinkInfo selectedDrink={selectedDrink} />
			<DrinkRecipe selectedDrink={selectedDrink} />
		</section>
	);
}

function DrinkInfo(props) {
	const {selectedDrink} = props;

	return (
		<article className="main-section app-recipe__info">
			<h2 className="app-recipe__info-name">{selectedDrink.name}</h2>
			<p className="app-recipe__info-description">{selectedDrink.description}</p>
			<div className="app-recipe__info-image-wrapper">
				<img className="app-recipe__info-image" src={selectedDrink.imgURL} alt="Drink" />
			</div>
		</article>
	);
};

function DrinkRecipe(props) {
	const {selectedDrink} = props;

	let ingredient = selectedDrink.ingredients.map((ingredient, index) => {
		return <li key={`ingredient_${ingredient}${index}`}
				   className="app-recipe__recipe-ingredient">{ingredient}</li>;
	});

	let step = selectedDrink.steps.map((step, index) => {
		return <li key={`step_${index}`}
				   className="app-recipe__recipe-step">{step}</li>;
	});

	return (
		<article className="app-recipe__recipe">
			<div className="app-recipe__recipe-ingredients">
				<h3 className="app-recipe__recipe-subtitle">Ingredients</h3>
				<ul className="app-recipe__recipe-list app-recipe__recipe-list--ingredients">{ingredient}</ul>
			</div>

			<div className="app-recipe__recipe-prescription">
				<h3 className="app-recipe__recipe-subtitle">Steps</h3>
				<ol className="app-recipe__recipe-list app-recipe__recipe-list--steps">{step}</ol>
			</div>
		</article>
	);
};

function RecipePageComponent(props) {
	const address = props.match.params.drinkId;
	return (
		<div className="bg-wrapper bg-wrapper-recipe">
			<div className="container container--home container--recipe">
				<RecipeContent address={address} drinksList={props.drinksList} />
			</div>
		</div>
	);
};

export default RecipePageComponent;
