import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CarsReducer from './ReducerCars';

export default combineReducers({
	cars: CarsReducer,
	form: formReducer
});