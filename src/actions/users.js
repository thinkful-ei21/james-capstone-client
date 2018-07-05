import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
// export const registerUserRequest = () => ({
//     type: REGISTER_USER_REQUEST
// });

// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// export const registerUserSuccess = () => ({
//     type: REGISTER_USER_SUCCESS
// });

// export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
// export const registerUserError = err => ({
//     type: REGISTER_USER_ERROR,
//     err
// });

export const registerUser = user => dispatch => {
    // dispatch(registerUser());
    fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res;
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
