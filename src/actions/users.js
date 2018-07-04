import { API_BASE_URL } from '../config';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const registerUserRequest = () => ({
    type: REGISTER_USER_REQUEST
});

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = err => ({
    type: REGISTER_USER_ERROR,
    err
});

export const registerUser = userData => dispatch => {
    // dispatch(registerUser());
    fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res;
        })
        .then(res => res.json())

        //pass in data to registerUserSuccess possibly?
        .then(data => dispatch(registerUserSuccess(data)))
        .catch(err => dispatch(registerUserError(err)));
};
