import {legacy_createStore, combineReducers} from 'redux'
import myreducer from './myreducers';

export const mystore = legacy_createStore(myreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);