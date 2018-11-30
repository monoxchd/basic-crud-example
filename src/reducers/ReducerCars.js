import { FETCH_CARS, CREATE_CAR } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CARS:
			return action.payload.cars;
		case CREATE_CAR:
			return state;
		default:
			return state;
	}
}