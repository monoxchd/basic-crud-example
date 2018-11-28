import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {
	render() {
		if (this.props.cars.length === 0){
			return <p className="banner">Pesquisa de veículos do <span>TradersClub</span></p>;
		}
		return <div>CarsList</div>;
	}
}

const mapStateToProps = state => {
	return { cars: state.cars };
}

export default connect(
	mapStateToProps
)(CarList);