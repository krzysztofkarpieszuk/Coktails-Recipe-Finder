import React from 'react';
import {Link} from 'react-router-dom';

function HomePageComponent() {
	return (
		<div className="bg-wrapper bg-wrapper-home">
			<div className="container container--home">
					<section className="app-home main-section">
						<h2 className="app-home__title">Welcome to Drinkello</h2>
						<p className="app-home__description">
							React application with recipes for classic alcoholic cocktails.
						</p>
						<Link to="/recipe-box/random" className="btn btn-cta">
							Get Inspired
						</Link>
					</section>
			</div>
		</div>
	);
};

export default HomePageComponent;
