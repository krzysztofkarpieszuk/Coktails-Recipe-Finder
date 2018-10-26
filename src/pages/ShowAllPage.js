import React from 'react';
import { db } from '../firebase';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Footer from '../layout/Footer';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let drink = this.props.data.map((e, i) => {
			const url = `url(${e.imgURL})`;
			const address = `/recipe-box/${e.name}`;
			return (
				<div className="result-box" style={{ backgroundImage: url }} ref={(element) => (this.box = element)}>
					<Link to={address} className="result-link">
						<div className="result-info">{e.name}</div>
					</Link>
				</div>
			);
		});

		return <div className="app-search__results">{drink}</div>;
	}
}

class ShowAllPage extends React.Component {
	constructor() {
		super();

		this.state = {
			data: null
		};
	}

	render() {
		if (this.state.data === null) {
			return (
				// If data is not received yet show loader
				<div className="bg-wrapper-home">
					<section className="app-recipe__content">
						<div className="loader">
							Loading
							<span />
						</div>
					</section>
				</div>
			);
		}

		return (
			<div className="bg-wrapper-home">
				<main className="app-home">
					<Gallery data={this.state.data} />
				</main>
				<Footer />
			</div>
		);
	}

	componentDidMount() {
		// Getting data from database
		db.collection('cocktails').get().then((response) => {
			let received = [];
			response.docs.forEach((element) => {
				received.push(element.data()); // pushing received data to an empty array
			});

			this.setState({
				data: received // setting received data as data state
			});
		});
	}
}

export default ShowAllPage;
