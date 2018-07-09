// import {
//     ADD_MOVIE_REQUEST,
//     ADD_MOVIE_SUCCESS,
//     ADD_MOVIE_ERROR,
//     CREATE_LIST_REQUEST,
//     CREATE_LIST_SUCCESS,
//     CREATE_LIST_ERROR
// } from '../actions/add';

// const initialState = {
//     lists: [], // this should be an array of objects
//     movies: [],
//     loading: false,
//     error: null
// };

// export const addMovieReducer = (state = initialState, action) => {
//     if (action.type === ADD_MOVIE_REQUEST) {
//         return {
//             ...state,
//             loading: true,
//             movies: [...state.movies]
//         };
//     }
//     if (action.type === ADD_MOVIE_SUCCESS) {
//         return {
//             ...state,
//             loading: false,
//             error: null,
//             movies: [...state.movies, action.movie]
//         };
//     }
//     if (action.type === ADD_MOVIE_ERROR) {
//         return {
//             ...state,
//             loading: false,
//             error: action.err,
//             movies: [...state.movies]
//         };
//     }
//     if (action.type === CREATE_LIST_REQUEST) {
//         return {
//             ...state,
//             loading: true
//         };
//     }
//     if (action.type === CREATE_LIST_SUCCESS) {
//         return {
//             ...state,
//             loading: false,
//             error: null,
//             lists: [...state.lists, action.list]
//         };
//     }
//     if (action.type === CREATE_LIST_ERROR) {
//         return {
//             ...state,
//             loading: false,
//             error: action.err,
//             movies: [...state.movies]
//         };
//     }
//     return state;
// };
