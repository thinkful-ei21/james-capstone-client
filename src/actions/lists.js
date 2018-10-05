import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const DELETE_LIST_REQUEST = 'DELETE_LIST_REQUEST';
export const deleteListRequest = () => ({
    type: DELETE_LIST_REQUEST
});

export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const deleteListSuccess = lists => ({
    type: DELETE_LIST_SUCCESS,
    lists
});

export const DELETE_LIST_ERROR = 'DELETE_LIST_ERROR';
export const deleteListError = err => ({
    type: DELETE_LIST_ERROR,
    err
});

export const deleteList = (listId) => (dispatch, getState) => {
    dispatch(deleteListRequest());

    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/lists/${listId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(deleteListSuccess(data)))
        .catch(err => dispatch(deleteListError(err)));
};