import { API_BASE_URL } from '../config';

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const fetchMoviesRequest = () => ({
    type: SEARCH_MOVIES_REQUEST
});

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
    type: SEARCH_MOVIES_SUCCESS,
    movies
});

export const SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR';
export const fetchMoviesError = err => ({
    type: SEARCH_MOVIE_ERROR,
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

export const FETCH_FULL_LIST_REQUEST = 'FETCH_FULL_LIST_REQUEST';
export const fetchFullListRequest = () => ({
    type: FETCH_FULL_LIST_REQUEST
});


export const FETCH_FULL_LIST_SUCCESS = 'FETCH_FULL_LIST_SUCCESS';
export const fetchFullListSuccess = list => ({
    type: FETCH_FULL_LIST_SUCCESS,
    list
});

export const FETCH_FULL_LIST_ERROR = 'FETCH_FULL_LIST_ERROR';
export const fetchFullListError = err => ({
    type: FETCH_FULL_LIST_ERROR,
    err
});

export const fetchFullList = (listId) => (dispatch, getState) => {
    dispatch(fetchFullListRequest());

    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/`)
};