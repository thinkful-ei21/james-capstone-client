import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../actions/movies';

import {
    CREATE_LIST_REQUEST,
    CREATE_LIST_SUCCESS,
    CREATE_LIST_ERROR
} from '../actions/add';
import { CLEAR_STATE } from '../actions/search';

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
        console.log(action.err);
        return {
            ...state,
            loading: false,
            error: 'No results found',
            movies: []
        };
    }
    if (action.type === CLEAR_STATE) {
        return {
            ...state,
            movies: [],
            error: null,
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
            error: action.err.message,
            movies: [...state.movies]
        };
    };
    return state;
};
