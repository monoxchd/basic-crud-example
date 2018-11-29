import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './common/Sidebar';
import Searchbar from './common/Searchbar';
import CarList from '../containers/CarList';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Sidebar />
					<Searchbar />
					<div className="main">
						<Route path="/" exact component={CarList} />
					</div>
				</div>
			</Router>
		);
	}
}