export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const searchMoviesRequest = () => ({
    type: SEARCH_MOVIES_REQUEST
});

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const searchMoviesSuccess = search => ({
    type: SEARCH_MOVIES_SUCCESS,
    search
});

export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';
export const searchMoviesError = err => ({
    type: SEARCH_MOVIES_ERROR,
    err
});

export const searchMovies = () => dispatch => {
    dispatch(searchMoviesRequest());
};
