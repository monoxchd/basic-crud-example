import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import 'bulma/css/bulma.min.css';

import './assets/styles/main.css';
import App from './components/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(reduxThunk))
);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
