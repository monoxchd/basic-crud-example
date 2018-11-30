import axios from 'axios';

export const FETCH_CARS = 'fetch_cars';
export const CREATE_CAR = 'create_car';

export const fetchCars = term => async dispatch => {
	const response = await axios.get('https://private-anon-b75dbf08ac-tradersclubapi.apiary-mock.com/api/cars', { 
		params: { search: term }  
	});

	dispatch({type: FETCH_CARS, payload: response.data});
};

export const createCar = formValues => async dispatch => {
	const response = await axios.post('https://private-anon-b7809a1d4d-tradersclubapi.apiary-mock.com/api/cars', formValues);

	dispatch({type: CREATE_CAR, payload: response.data});
}