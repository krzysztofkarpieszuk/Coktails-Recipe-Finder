import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props) => {
	return (
		<div className="bg-wrapper-home">
			<main className="app-home">
				<section className="app-home__content">
					<h2 className="app-home__title">Welcome</h2>
					<p className="app-home__description">Drinkello is an alcoholic cocktails recipes finder.</p>
					<Link to="/recipe-box/random" className="btn-home__cta">
						Get Inspired
					</Link>
				</section>
			</main>
		</div>
	);
};

export default HomePage;
