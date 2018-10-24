import React from 'react';

const Header = () => {
	return (
		<header className="app-header">
			<div className="container">
				<button className="navTrigger">
					<i className="fas fa-bars" />
				</button>
                <h1>Cocktails Finder</h1>
			</div>
		</header>
	);
};

export default Header;
