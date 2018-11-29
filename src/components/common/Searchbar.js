import React, { Component } from 'react';
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
				<form onSubmit={this.onFormSubmit}>
					<div className="field is-grouped">
						<div className="control is-expanded">
							<input
								className="input"
								type="text"
								placeholder="Pesquise por um veículo"
								value={this.state.term}
								onChange={e => this.setState({term: e.target.value})}
							/>
						</div>
						<div className="control">
							<button className="button">Cadastrar</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(
	null,
	{ fetchCars }
)(Searchbar);