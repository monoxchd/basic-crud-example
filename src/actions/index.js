import axios from 'axios';

export const FETCH_CARS = 'fetch_cars';

export const fetchCars = term => async dispatch => {
	const response = await axios.get('https://private-anon-b75dbf08ac-tradersclubapi.apiary-mock.com/api/cars', { 
		params: { search: term }  
	});

	dispatch({type: FETCH_CARS, payload: response.data});
};