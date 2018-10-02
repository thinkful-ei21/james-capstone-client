import { API_BASE_URL } from '../config';

export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST';
export const fetchListsRequest = () => ({
    type: FETCH_LISTS_REQUEST
});

export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const fetchListsSuccess = lists => ({
    type: FETCH_LISTS_SUCCESS,
    lists
});

export const FETCH_LISTS_ERROR = 'FETCH_LISTS_ERROR';
export const fetchListsError = err => ({
    type: FETCH_LISTS_ERROR,
    err
});

export const fetchLists = () => dispatch => {
    dispatch(fetchListsRequest());
    // return fetch
}