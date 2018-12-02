import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../../actions';

class Searchbar extends Component {
	state = {term: ''};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.fetchCars(this.state.term);
	}

	render() {
		return (
			<div className="searchbar">	
				<div className="field is-grouped">
					<div className="control is-expanded">
						<form onSubmit={this.onFormSubmit}>
							<input
								className="input"
								type="text"
								placeholder="Pesquise por um veículo"
								value={this.state.term}
								onChange={e => this.setState({term: e.target.value})}
							/>
						</form>
					</div>
					<div className="control">
						<Link to="/cars/new"><button className="button">Cadastrar</button></Link>
					</div>
				</div>	
			</div>
		);
	}
}

export default connect(
	null,
	{ fetchCars }
)(Searchbar);