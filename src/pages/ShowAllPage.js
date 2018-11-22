import React from 'react';
import { Link } from 'react-router-dom';


const Gallery = (props) => {
	let drink = props.data.map((e, i) => {
		const url = `url(${e.imgURL})`;
		const address = `/recipe-box/${e.name}`;
		return (
			<div className="result-box" key={`result${i}`} style={{ backgroundImage: url }}>
				<Link to={address} className="result-link">
					<div className="result-info">{e.name}</div>
				</Link>
			</div>
		);
	});

	return <div className="app-search__results">{drink}</div>;
}


class ShowAllPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data
		};
	}

	render() {
		return (
			<div className="bg-wrapper-home">
				<main className="app-home">
					<Gallery data={this.state.data} />
				</main>
			</div>
		);
	}

}

export default ShowAllPage;
