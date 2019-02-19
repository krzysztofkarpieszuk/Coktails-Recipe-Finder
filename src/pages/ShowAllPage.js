import React from 'react';
import {SearchResults} from './SearchPage';

function ShowAllPage(props) {
	return (
		<div className="bg-wrapper-home">
			<main className="app-home">
				<SearchResults data={props.data} />
			</main>
		</div>
	)
}

export default ShowAllPage;
