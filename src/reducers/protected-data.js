import { CLEAR_STATE } from '../actions/search';

const initialState = {
    data: [],
    error: null,
    currentList: [],
    title: ''
};

export const protectedDataReducer = (state = initialState, action) => {
    if (action.type === CLEAR_STATE) {
        return {
            ...state,
            currentList: [],
            title: ''
        };
    }
    return state;
};
