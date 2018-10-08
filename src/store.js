import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/movies';
import { authReducer } from './reducers/users';
import { reducer as formReducer } from 'redux-form';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

export const store = createStore(
    combineReducers({
        movies: moviesReducer,
        form: formReducer,
        auth: authReducer
    }),
    // compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}
