import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/movies';
import { authReducer } from './reducers/users';
import { reducer as formReducer } from 'redux-form';

export const store = createStore(
    combineReducers({
        movies: moviesReducer,
        form: formReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
);
