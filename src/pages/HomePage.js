import React from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		breakpoints: [800, 550, 420, 330]
	}

	return (

		<Slider {...settings} >
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
				Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started.
				</p>
			</div>
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
				Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started.
				</p>
			</div>
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
				Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started.
				</p>
			</div>
		</Slider>

	)
}

const HomeMainSection = () => {
	return (
		<section className="app-home__content">
			<HomeSlider />
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
