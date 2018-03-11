import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reduxImmutabeStateInvariant = require('redux-immutable-state-invariant');
export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, reduxImmutabeStateInvariant()),
        ));
    return store;
}



