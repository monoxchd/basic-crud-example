import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './common/Sidebar';
import Searchbar from './common/Searchbar';
import PostCreate from './posts/PostCreate';
import PostDelete from './posts/PostDelete';
import PostEdit from './posts/PostEdit';
import CarList from './posts/CarList';
import PostShow from './posts/PostShow';

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Sidebar />
						<Searchbar />
						<Route path="/" exact component={CarList} />
						<Route path="/posts/new" exact component={PostCreate} />
						<Route path="/posts/edit" exact component={PostEdit} />
						<Route path="/posts/delete" exact component={PostDelete} />
						<Route path="/posts/show" exact component={PostShow} />
					</div>
				</Router>
			</div>
		);
	}
}