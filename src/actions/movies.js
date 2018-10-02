import { API_BASE_URL } from '../config';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const fetchMoviesRequest = () => ({
    type: FETCH_MOVIES_REQUEST
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
});

export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
export const fetchMoviesError = err => ({
    type: FETCH_MOVIE_ERROR,
    err
});

export const fetchMovies = searchTerm => dispatch => {
    if (searchTerm) {
        dispatch(fetchMoviesRequest());
        return fetch(`${API_BASE_URL}/search?title=${searchTerm}`, {
            method: 'GET'
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(data => dispatch(fetchMoviesSuccess(data.Search)))
            .catch(err => {
                // console.log(err);
                dispatch(fetchMoviesError(err));
            });
    }
};

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

export const fetchLists = () => (dispatch, getState) => {
    console.log('fetching lists from db');
    const authToken = getState().auth.authToken;
    
    dispatch(fetchListsRequest());
    return fetch(`${API_BASE_URL}/lists`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch(fetchListsSuccess(data))
        })
        .catch(err => {
            dispatch(fetchListsError(err))
        });
}
