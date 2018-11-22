import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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
		breakpoints: [ 800, 550, 420, 330 ]
	};

	return (
		<Slider {...settings}>
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
					Looking for some inspiration? Leave it to me! <br/> I will draw you recipe for a classic cocktail.
				</p>
				<Link to="/recipe-box/random" className="btn-home__cta">Get Inspired</Link>
			</div>
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
					Would you like to see my drinks collection?
				</p>
				<Link to="/show-all" className="btn-home__cta">All Drinks</Link>
			</div>
			<div>
				<h2 className="app-home__title">Welcome to Drinkello</h2>
				<p className="app-home__description">
					See five most popular recipes in my sleeve!
				</p>
				<button className="btn-home__cta">Most Popular Drinks</button>
			</div>
		</Slider>
	);
};

const HomeMainSection = () => {
	return (
		<section className="app-home__content">
			<HomeSlider />
		</section>
	);
};

const HomePage = () => {
	return (
		<div className="bg-wrapper-home">
			<main className="app-home">
				<HomeMainSection />
			</main>
		</div>
	);
};

export default HomePage;
