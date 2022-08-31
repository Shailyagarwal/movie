import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from './reducer'


export const rootReducer = combineReducers({ apiReducer });

let store = createStore(rootReducer, applyMiddleware(thunk,))

export default store