import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createCar, editCar, allCars } from '../actions';

class CarCreate extends Component {
	componentWillMount() {
		this.props.allCars();
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="notification">
					<button className="delete"></button>
					<div>{ error }</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, type, meta }) => {
		console.log(meta);
		return (
			<div>
				<input className="car-input input" {...input} placeholder={label} type={type} />
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
				<form className="car-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<div className="field">
						<div className="control">
							<Field name="title" component={this.renderInput} label="Título do anúncio" type="text" />
						</div>
					</div>
					
					<div className="field is-grouped">
						<div className="control is-expanded">
							<Field name="model" component={this.renderInput} label="Modelo" type="text" />
						</div>
						<div className="control is-expanded">
							<Field name="year" component={this.renderInput} label="Ano" type="text" />
						</div>
					</div>
					
					<div className="field">
						<div className="control">
							<Field name="brand" component={this.renderInput} label="Marca" type="text" />
						</div>
					</div>
					
					<div className="field is-grouped">
						<div className="control is-expanded">
							<Field name="color" component={this.renderInput} label="Cor" type="text" />
						</div>
						<div className="control is-expanded">
							<Field name="price" component={this.renderInput} label="Preço" type="text" />
						</div>
					</div>
					
					<div className="field is-narrow">
						<div className="control">
							<Field name="km" component={this.renderInput} label="KM" type="text" />
						</div>
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