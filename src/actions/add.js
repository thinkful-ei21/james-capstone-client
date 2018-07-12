import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ADD_MOVIE_REQUEST = 'ADD_MOVIE_REQUEST';
export const addMovieRequest = () => ({
    type: ADD_MOVIE_REQUEST
});

export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const addMovieSuccess = movieId => ({
    type: ADD_MOVIE_SUCCESS,
    movieId
});

export const ADD_MOVIE_ERROR = 'ADD_MOVIE_ERROR';
export const addMovieError = err => ({
    type: ADD_MOVIE_ERROR,
    err
});

export const addMovie = (movieId, listId, year, title, poster) => (
    dispatch,
    getState
) => {
    dispatch(addMovieRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            movieId,
            listId,
            year,
            title,
            poster
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(addMovieSuccess(movieId, listId, year, title, poster));
        })
        .catch(err => dispatch(addMovieError(err)));
};

export const CREATE_LIST_REQUEST = 'CREATE_LIST_REQUEST';
export const createListRequest = () => ({
    type: CREATE_LIST_REQUEST
});

export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
export const createListSuccess = list => ({
    type: CREATE_LIST_SUCCESS,
    list
});

export const CREATE_LIST_ERROR = 'CREATE_LIST_ERROR';
export const createListError = err => ({
    type: CREATE_LIST_ERROR,
    err
});

export const createList = title => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createListRequest());
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            title
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(createListSuccess(data));
        })
        .catch(err => dispatch(createListError(err)));
};
