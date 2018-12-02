import { ALL_CARS, FETCH_CARS, CREATE_CAR, EDIT_CAR } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
	switch (action.type) {
		case ALL_CARS:
			return _.mapKeys(action.payload.cars, 'id');
		case FETCH_CARS:
			return action.payload.cars;
		case CREATE_CAR:
			return state;
		case EDIT_CAR:
			return state;
		default:
			return state;
	}
}