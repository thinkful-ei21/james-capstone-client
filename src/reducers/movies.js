import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIE_ERROR,
    FETCH_FULL_LIST_REQUEST,
    FETCH_FULL_LIST_SUCCESS,
    FETCH_FULL_LIST_ERROR,
    FETCH_LISTS_REQUEST,
    FETCH_LISTS_SUCCESS,
    FETCH_LISTS_ERROR
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
    error: null,
    listError: null,
    movies: [],
    currentList: null
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
            movies: [...action.movies]
        };
    }
    if (action.type === SEARCH_MOVIE_ERROR) {
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
            lists: [],
            loading: false,
            error: null,
            listError: null,
            movies: [],
            currentList: null
        }
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
            listError: action.err.message,
            movies: [...state.movies]
        };
    }
    if (action.type === FETCH_LISTS_REQUEST) {
        return {
            ...state,
            loading: true,
        }
    }
    if (action.type === FETCH_LISTS_SUCCESS) {
        return {
            ...state,
            loading: false,
            lists: action.lists
        }
    }
    if (action.type === FETCH_LISTS_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err
        }
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
            currentList: action.list.movies
        }
    }
    if (action.type === FETCH_FULL_LIST_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.err
        };
    }
    return state;
};
