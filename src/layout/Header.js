import React from 'react';
import {Link} from 'react-router-dom'

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
				<Link to="/" className="app-header__logo">Drinkello</Link>
			</div>
		</header>
	)

   }

}

export default Header;
