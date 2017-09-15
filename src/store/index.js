import {createStore, applyMiddleware} from 'redux';
import {counterReducer} from './counter';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	counterReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
