import React, { Component } from 'react';
import { connect } from 'react-redux';

class Searchbar extends Component {
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

const mapStateToProps = state => {
	return { cars: state.cars };
};

export default connect(
	mapStateToProps
)(Searchbar);