import * as types from './actionTypes'

export const registerStart = () => ({
    type: types.LOGIN_START,
});

export const registerSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    user: user
});

export const registerFailure = () => ({
    type: types.LOGIN_FAILURE,
});

