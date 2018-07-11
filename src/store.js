import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/movies';
import { authReducer } from './reducers/users';
import { reducer as formReducer } from 'redux-form';
import { protectedDataReducer } from './reducers/protected-data';

export const store = createStore(
    combineReducers({
        movies: moviesReducer,
        form: formReducer,
        auth: authReducer,
        listData: protectedDataReducer
    }),
    // compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);
