import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = err => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    err
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchProtectedDataSuccess(data));
        })
        .catch(err => dispatch(fetchProtectedDataError(err)));
};

export const FETCH_CURRENT_LIST_SUCCESS = 'FETCH_CURRENT_LIST_SUCCESS';
export const fetchCurrentListSuccess = (moviesList, title) => ({
    type: FETCH_CURRENT_LIST_SUCCESS,
    moviesList,
    title
});

export const FETCH_CURRENT_LIST_ERROR = 'FETCH_CURRENT_LIST_ERROR';
export const fetchCurrentListError = err => ({
    type: FETCH_CURRENT_LIST_ERROR,
    err
});

export const fetchCurrentList = listId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/lists/${listId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(list => {
            const title = list.title;
            const moviesList = list.movies;
            dispatch(fetchCurrentListSuccess(moviesList, title));
        })
        .catch(err => dispatch(fetchCurrentListError(err)));
};
