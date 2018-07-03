import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/movies';
import { reducer as formReducer } from 'redux-form';

export const store = createStore(
    combineReducers({
        movies: moviesReducer,
        form: formReducer
    }),
    applyMiddleware(thunk)
);
