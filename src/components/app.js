import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostDelete from './posts/PostDelete';
import PostEdit from './posts/PostEdit';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className="container">
						<Route path="/" exact component={PostList} />
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