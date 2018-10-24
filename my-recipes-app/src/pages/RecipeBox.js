import React from 'react';
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import Footer from '../layout/Footer';

class DrinkInfo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="drink-info">
				<h2 className="app-recipe__title">Negroni</h2>
				<p className="app-recipe__description">
					Designed to be an aperitif, a good Negroni is the very definition and balance of sophistication and
					simplicity.
				</p>
				<img
					src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/19/1463001231-gettyimages-472106542.jpg?resize=980:*"
					alt=""/>
			</div>
		);
	}
}

class DrinkRecipe extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="app-recipe__drink">
				<article className="app-recipe__ingredients">
					<h3>Ingredients</h3>
					<ul>
						<li>1 oz. London dry gin</li>
						<li>1 oz. Campari</li>
						<li>1 oz. vermouth rosso</li>
						<li>Cocktail glass</li>
					</ul>
				</article>

				<article className="app-recipe_prescription">
					<h3>Steps</h3>
					<ol>
						<li>Add the ingredients together in a cocktail shaker.</li>
						<li>Shake well with cracked ice.</li>
						<li>Strain into a chilled cocktail glass.</li>
						<li>Garnish with a twist of orange peel.</li>
					</ol>
				</article>
			</div>
		);
	}
}

class RecipePage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bg-wrapper-recipe">
				<Header />
				<main className="app-recipe">
					<Menu />
					<DrinkInfo />
					<DrinkRecipe />
				</main>
				<Footer />
			</div>
		);
	}
}

export default RecipePage;
