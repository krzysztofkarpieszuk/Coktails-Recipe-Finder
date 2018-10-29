import React from 'react';


const HomeMainSection = () => {
	return (
		<section className="app-home__content">
			<h2 className="app-home__title">Welcome to Drinkello</h2>
			<p className="app-home__description">
				Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started.
			</p>
		</section>
	);
}

const HomePage = () => {
	return (
		<div className="bg-wrapper-home">
		<main className="app-home">
			<HomeMainSection />
		</main>
		</div>
	);
}



export default HomePage;
