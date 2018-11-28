import { combineReducers } from 'redux';
import CarsReducer from './ReducerCars';

export default combineReducers({
	cars: CarsReducer
});