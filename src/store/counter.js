import axios from 'axios';

const CREATE_COUNTER 	= 'CREATE_COUNTER';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const FETCHING_COUNTER = 'FETCHING_COUNTER';
const RECEIVED_COUNTER = 'RECEIVED_COUNTER';

const initialState = {
	counters: {}
};

export function createCounter(id) {
	return {
		type: CREATE_COUNTER,
		id: id
	};
}

export function incrementCounter(id) {
	return {
		type: INCREMENT_COUNTER,
		id: id
	};
}

export function decrementCounter(id) {
	return {
		type: DECREMENT_COUNTER,
		id: id
	};
}

export function fetchCounter() {
	return dispatch => {
		dispatch(fetchingCounter());

		axios.get('https://api.github.com/users/rennie1213')
		.then(resp => {
			dispatch(receivedCounter(resp.data))
		})
	}
}

export function fetchingCounter(counter) {
	return {
		type: FETCHING_COUNTER,
		counter: counter
	};
}

export function receivedCounter(counter) {

	console.log(counter);
	return {
		type: RECEIVED_COUNTER,
		counter: counter
	};
}

export function counterReducer(state, action) {
	if(state == undefined) return initialState;

	let counters = state.counters;

	switch(action.type) {
		case CREATE_COUNTER:

			counters[action.id] = newCounter();

			return {
				counters: counters
			}

		case INCREMENT_COUNTER:

			counters[action.id].count = ++counters[action.id].count; 

			return {
				counters: counters
			};

		case DECREMENT_COUNTER:

			counters[action.id].count = --counters[action.id].count; 
			
			return {
				counters: counters
			};
	}

	return state;
}

export function selectCount(state, id) {
	return state.counters[id] ? state.counters[id].count : 0;
}

function newCounter() {
	return {
		count: 0
	}
}