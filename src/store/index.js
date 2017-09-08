import {createStore} from 'redux';
import {counterReducer} from './counter';

const store = createStore(counterReducer);

export default store;
