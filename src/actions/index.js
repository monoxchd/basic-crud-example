import axios from 'axios';

export const FETCH_CARS = 'fetch_cars';

export function fetch_cars(term) {
	const request = axios.get('https://private-anon-b75dbf08ac-tradersclubapi.apiary-mock.com/api/cars', { 
		params: { search: term }  
	});
}