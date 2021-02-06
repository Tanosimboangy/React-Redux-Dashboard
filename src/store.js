import { createStore } from 'redux';
import {reducers} from './reducers/index';
import state from './state';

const store = createStore(reducers);

console.log(store.getState())

export default store;