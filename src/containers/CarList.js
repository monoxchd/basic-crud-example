import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import CarDisplay from '../components/cars/CarDisplay';

class CarList extends Component {
	render() {
		if (this.props.cars.length === 0){
			return <div className=""><p className="banner">Pesquisa de veículos do <span>TradersClub</span></p></div>;
		} else {
			return(
				<div className="car-list">
					<ul className="list-group">
						{ _.map(this.props.cars, car => <CarDisplay value={car} key={car.id} />) }
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = ({cars}) => {
	return { cars };
}

export default connect(
	mapStateToProps
)(CarList);