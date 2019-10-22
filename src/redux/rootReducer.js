import {combineReducers} from 'redux';

import {counterReducer, loggedReducer} from './reducerList';

export const rootReducer = combineReducers({
    counterReducer,
    loggedReducer
});