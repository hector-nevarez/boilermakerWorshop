import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import dummyReducer from '../reducer';

const reducer = combineReducers({
    dummyReducer,
});
const middleware= applyMiddleware(thunkMiddleware, createLogger());

const store = createStore(reducer, middleware);

export default store;