import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIE_ERROR,
    FETCH_FULL_LIST_REQUEST,
    FETCH_FULL_LIST_SUCCESS
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
    movies: [],
    currentList: []
};

export const moviesReducer = (state = initialState, action) => {
    if (action.type === SEARCH_MOVIES_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === SEARCH_MOVIES_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            movies: action.movies
        };
    }
    if (action.type === SEARCH_MOVIE_ERROR) {
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
    }
    if (action.type === FETCH_FULL_LIST_REQUEST) {
        return {
            ...state,
            loading: true,
        };
    }
    if (action.type === FETCH_FULL_LIST_SUCCESS) {
        return {
            ...state,
            loading: false,
            currentList: []
        }
    }
    return state;
};
