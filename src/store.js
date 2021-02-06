import { createStore } from 'redux';

import state from './state';

import reducers from './reducers/index';

const store = createStore(reducers);

store.subscribe(() => {
    console.log(store.getState())
})

export default store;