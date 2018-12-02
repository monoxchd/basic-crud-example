import React from 'react';
import { Link } from 'react-router-dom';

const CarDisplay = (props) => {
	const { id, title, price, model, brand, km, year } = props.value;
	return (
		<Link to={`/cars/edit/${id}`}>
			<li className="list-group-item">
	    		<p><strong>{ title }</strong><span>R$ { price }</span></p>
	    		<p><strong>{ model } - { brand } - { km } KM</strong><span>{ year }</span></p>
	    	</li>
	    </Link>
	);
}

export default CarDisplay;