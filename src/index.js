import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBn7kTORO8keZ7Lnw_F9EIRBgE3CE-7ci4';

const App = () => {
	return (
		<div>
		<SearchBar />
		</div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));