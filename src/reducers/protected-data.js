import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_CURRENT_LIST_SUCCESS
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null,
    currentList: []
};

export const protectedDataReducer = (state = initialState, action) => {
    console.log(action, state);
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return {
            ...state,
            data: action.data
        };
    }
    if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return {
            ...state,
            error: action.err
        };
    }
    if (action.type === FETCH_CURRENT_LIST_SUCCESS) {
        return {
            ...state,
            currentList: action.moviesList
        };
    }
    return state;
};
