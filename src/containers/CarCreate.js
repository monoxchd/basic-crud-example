import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createCar, editCar, allCars } from '../actions';

class CarCreate extends Component {
	componentWillMount() {
		console.log(this.props);
		this.props.allCars();
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div>
					<div>{ error }</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, type, meta }) => {
		return (
			<div>
				<input className="input" {...input} placeholder={label} type={type} />
				{ this.renderError(meta) }
			</div>
		);
	}

	onSubmit = formValues => {
		const submit = {};
		submit.car = formValues;
		this.props.match.path === "/cars/new" ? this.props.createCar(submit) : this.props.editCar(submit);
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<div className="field">
						<p className="control">
							<Field name="title" component={this.renderInput} label="Título do anúncio" type="text" />
						</p>
					</div>
					
					<div className="field is-grouped">
						<p className="control is-expanded">
							<Field name="model" component={this.renderInput} label="Modelo" type="text" />
						</p>
						<p className="control is-expanded">
							<Field name="year" component={this.renderInput} label="Ano" type="text" />
						</p>
					</div>
					
					<div className="field">
						<p className="control">
							<Field name="brand" component={this.renderInput} label="Marca" type="text" />
						</p>
					</div>
					
					<div className="field is-grouped">
						<p className="control is-expanded">
							<Field name="color" component={this.renderInput} label="Cor" type="text" />
						</p>
						<p className="control is-expanded">
							<Field name="price" component={this.renderInput} label="Preço" type="text" />
						</p>
					</div>
					
					<div className="field is-narrow">
						<p className="control">
							<Field name="km" component={this.renderInput} label="KM" type="text" />
						</p>
					</div>
					
					<button className="button">Salvar</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.title) {
		errors.title = 'Inserir título';
	}

	if (!values.price) {
		errors.price = 'Inserir um valor';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'carCreate',
	validate
})(CarCreate);

const mapStateToProps = ({ cars }, ownProps) => {
	return { 
		cars,
		initialValues: cars[parseInt(ownProps.match.params.id)]
	};
}

export default connect(
	mapStateToProps,
	{ createCar, editCar, allCars }
)(formWrapped);