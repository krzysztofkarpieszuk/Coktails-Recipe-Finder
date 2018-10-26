import React from 'react';

class Header extends React.Component {
   constructor() {
	   super()

	   this.state = {
		menuOpen: false
	   }
   }

   handleClick = (e) => {
		e.currentTarget.classList.toggle('open');

			this.setState ({
				menuOpen: !this.state.menuOpen
			})

			this.props.toggleMobileMenu(!this.state.menuOpen)
	};

   render() {
	return (
		<header className="app-header">
			<div className="container">
			<div className="navTrigger">
				<div className="wrapper-menu" onClick={this.handleClick}>
					<div className="line-menu half start" />
					<div className="line-menu" />
					<div className="line-menu half end" />
				</div>
			</div>
				<h1>Cocktails Finder</h1>
			</div>
		</header>
	)

   }

}

export default Header;
