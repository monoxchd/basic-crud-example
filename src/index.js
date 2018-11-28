import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import 'bulma/css/bulma.min.css';

import './assets/styles/main.css';
import App from './components/app';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
