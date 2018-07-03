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

export const fetchMovies = search => dispatch => {
    if (search) {
        dispatch(fetchMoviesRequest());
        fetch(`${API_BASE_URL}/movies?title=${search}`, {
            method: 'GET'
            // body: JSON.stringify(search),
            // headers: {
            //     'content-type': 'application/json'
            // }
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(data => dispatch(fetchMoviesSuccess(data.Search)))
            .catch(err => dispatch(fetchMoviesError(err)));
    }
};
