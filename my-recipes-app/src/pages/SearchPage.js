import React from 'react';
// import Header from '../layout/Header';
// import Menu from '../layout/Menu';
import Footer from '../layout/Footer';
import Drinks from '../database'
import {db} from '../firebase'

class ResultBox extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="result-box">
				<a href="">
					<div className="result-info"></div>
				</a>
			</div>
		);
	}
}

class SearchResults extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="app-search__results">
				<ResultBox />
			</div>
		);
	}
}

class SearchMainContent extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<section className="app-search__content">
				<h2>Find Your Drink</h2>
				<input type="search" name="" id="" className="app-search__input" placeholder="Start typing..." />
                <SearchResults />
			</section>
		);
    }

    componentDidMount() {
        db.collection("cocktails").get().then((resp) => {
            console.log(resp.docs);
            resp.docs.forEach((e) => {
                console.log(e.data());
             })
        })
    }
}

class SearchPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bg-wrapper-search">
				<main className="app-search">
                    <SearchMainContent />
				</main>
                <Footer />
			</div>
		);
	}
}

export default SearchPage;