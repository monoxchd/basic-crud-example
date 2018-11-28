import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<aside class="menu">
			<Link to="/"><h1>Traders Club</h1></Link>
		</aside>
	);
}

export default Sidebar;