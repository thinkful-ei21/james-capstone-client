import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../actions/movies';

import {
    ADD_MOVIE_REQUEST,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_ERROR,
    CREATE_LIST_REQUEST,
    CREATE_LIST_SUCCESS,
    CREATE_LIST_ERROR
} from '../actions/add';

const initialState = {
    lists: [],
    loading: false,
    //movieError instead
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
            error: action.err,
            movies: []
        };
    }
    if (action.type === ADD_MOVIE_REQUEST) {
        return {
            ...state,
            loading: true,
            movies: [...state.movies]
        };
    }
    if (action.type === ADD_MOVIE_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            movies: [...state.movies, action.movie]
        };
    }
    if (action.type === ADD_MOVIE_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err,
            movies: [...state.movies]
        };
    }
    if (action.type === CREATE_LIST_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === CREATE_LIST_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            lists: [...state.lists, action.list]
        };
    }
    if (action.type === CREATE_LIST_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err,
            movies: [...state.movies]
        };
    }
    return state;
};
