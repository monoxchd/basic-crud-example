import axios from 'axios';

export const ALL_CARS = 'all_cars';
export const FETCH_CARS = 'fetch_cars';
export const CREATE_CAR = 'create_car';
export const EDIT_CAR = 'edit_car';

export const allCars = () => async dispatch => {
	const response = await axios.get('');

	dispatch({type: ALL_CARS, payload: response.data});
}

export const fetchCars = term => async dispatch => {
	const response = await axios.get('https://private-anon-b75dbf08ac-tradersclubapi.apiary-mock.com/api/cars', { 
		params: { search: term }  
	});

	dispatch({type: FETCH_CARS, payload: response.data});
}

export const createCar = formValues => async dispatch => {
	const response = await axios.post('https://private-anon-b7809a1d4d-tradersclubapi.apiary-mock.com/api/cars', formValues);

	dispatch({type: CREATE_CAR, payload: response.data});
}

export const editCar = formValues => async dispatch => {
	const response = await axios.put(`https://private-anon-b7809a1d4d-tradersclubapi.apiary-mock.com/api/cars/${formValues.car.id}`, formValues);

	dispatch({type: EDIT_CAR, payload: response.data});
}