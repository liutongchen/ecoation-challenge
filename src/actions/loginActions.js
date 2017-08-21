import * as types from './actionTypes'

export const loginStart = () => ({
    type: types.LOGIN_START,
});

export const loginSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    user: user,
});

export const loginFailure = () => ({
    type: types.LOGIN_FAILURE,
});

export const logout = () => ({
    type: types.LOGOUT,
});