import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import history from '../utils/HistoryUtils';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [
    thunk,
    routerMiddleware(history),
    createLogger(),
];

const enhancers = [
    devToolsExtension,
];

export default (initialState = {}) => createStore(
    connectRouter(history)(combineReducers({...reducers})),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers),
);
