import React from 'react';
import {SearchResults} from './SearchPage';

function ShowAllPage(props) {
	return (
		<div className="bg-wrapper-home">
			<main className="app-home">
				<SearchResults drinksList={props.drinksList} />
			</main>
		</div>
	)
}

export default ShowAllPage;
