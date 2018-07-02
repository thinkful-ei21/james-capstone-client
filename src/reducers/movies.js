import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../actions/movies';

const initialState = {
    loading: false,
    error: null,
    movies: []
};

export const moviesReducer = (state = initialState, action) => {
    if (action.type === FETCH_MOVIES_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === FETCH_MOVIES_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            movies: action.movies
        };
    }
    if (action.type === FETCH_MOVIE_ERROR) {
        return {
            loading: false,
            error: action.error
        };
    }
    return state;
};
