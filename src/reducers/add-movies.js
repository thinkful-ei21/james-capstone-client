import { ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR } from '../actions/add';

const initialState = {
    lists: [], // this should be an array of objects
    listMovies: [],
    loading: false,
    error: null
};

export const addMovieReducer = (state = initialState, action) => {
    if (action.type === ADD_MOVIE_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === ADD_MOVIE_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            listMovies: [...state.listMovies, action.movieId]
        };
    }
    if (action.type === ADD_MOVIE_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err
        };
    }
    return state;
};
