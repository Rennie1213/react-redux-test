const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const initialState = {
	count: 0
};

export function incrementCounter() {
	return {
		type: INCREMENT_COUNTER
	};
}


export function decrementCounter() {
	return {
		type: DECREMENT_COUNTER
	};
}

export function counterReducer(state, action) {
	if(state == undefined) return initialState;

	switch(action.type) {
		case INCREMENT_COUNTER:
			return {
				count: ++state.count
			};
		case DECREMENT_COUNTER:
			return {
				count: --state.count
			};
	}

	return state;
}

export function selectCounter(state) {
	return state.count;
}
