import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const HomeSlider = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false
	};

	return (
		<Slider {...settings}>
			<div className="home-slider__slide">
				<h2 className="app-home__title">Welcome</h2>
				<p className="app-home__description">Drinkello is a alcohol cokctails recipe finder.</p>
				<Link to="/recipe-box/random" className="btn-home__cta">
					Get Inspired
				</Link>
			</div>
			<div className="home-slider__slide">
				<h2 className="app-home__title">Welcome</h2>
				<p className="app-home__description">Drinkello is a alcohol cokctails recipe finder.</p>
				<Link to="/show-all" className="btn-home__cta">
					All Drinks
				</Link>
			</div>
			<div className="home-slider__slide">
				<h2 className="app-home__title">Welcome</h2>
				<p className="app-home__description">Drinkello is a alcohol cokctails recipe finder.</p>
				<button className="btn-home__cta" onClick={props.handleClick}>
					Popular Cocktails
				</button>
			</div>
		</Slider>
	);
};

class PopularDrinks extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			settings: {
				dots: true,
				infinite: true,
				speed: 800,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
				responsive: [
					{
						breakpoint: 1140,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 860,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 608,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			}
		};
	}

	render() {
		let popular = this.props.data.filter((e) => {
			return e.popular === true;
		});

		let drink = popular.map((e, i) => {
			const url = `url(${e.imgURL})`;
			const address = `/recipe-box/${e.name}`;

			return (
				<div>
					<div className="popular-slider__drink" key={`result${i}`}>
						<div className="popular-slider__drink-img" style={{ backgroundImage: url }} />
						<Link to={address} className="popular-slider__drink-name">
							{e.name}
						</Link>
					</div>
				</div>
			);
		});

		const sliderVisibility = this.props.state ? 'visible' : '';
		const sliderOpacity = this.props.state ? '1' : '';

		return (
			<div className="popular-slider" style={{ visibility: sliderVisibility, opacity: sliderOpacity }}>
				<Slider {...this.state.settings}>{drink}</Slider>
			</div>
		);
	}
}

const HomeMainSection = (props) => {
	return (
		<section className="app-home__content">
			<HomeSlider handleClick={props.handleClick} />
			<PopularDrinks data={props.data} state={props.state} />
		</section>
	);
};

const HomePage = (props) => {
	console.log(props.popularSlider);
	return (
		<div className="bg-wrapper-home">
			<main className="app-home">
				<HomeMainSection data={props.data} state={props.popularSlider} handleClick={props.onPopularBtnClick} />
			</main>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		popularSlider: state.popular.isPopularSliderOpen
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPopularBtnClick: () => dispatch({ type: actionTypes.TOGGLE_POPULAR_DRINKS })
	};
};

// const specialContainerCreator = connect(mapStateToProps, mapDispatchToProps)

// export const HomeSliderConnected = specialContainerCreator(HomeSlider)
// export const PopularSliderConnected = specialContainerCreator(HomeSlider)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
