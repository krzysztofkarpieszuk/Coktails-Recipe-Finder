import React from 'react';
import {Link} from "react-router-dom";

export default function AllDrinksPageComponent(props) {
	return (
		<div className="bg-wrapper bg-wrapper-home">
			<div className="container container--home">
				<section className="app-home main-section all-drinks">
					<AllDrinksWrapperComponent drinksList={props.drinksList} />
				</section>
			</div>
		</div>
	)
};

export function AllDrinksWrapperComponent(props) {

	const drink = props.drinksList.map(drink => {
		const url= `url(${drink.imgURL})`;
		const address = `/recipe-box/${drink.id}`;
		const propsToDrinkBox = {drink, url, address };
		return (
			<DrinkBox key={drink.id} {...propsToDrinkBox}/>
		);
	});

	return <div className="all-drinks__results">{drink}</div>;
}

function DrinkBox(props) {
	if(!props) {
		return;
	}

	const {drink, url, address} = props;
	return (
		<div className="drink-box" style={{ backgroundImage: url }}>
			<Link to={address} className="drink-box__link">
				<div className="drink-box__name">{drink.name}</div>
			</Link>
		</div>
	)
}


