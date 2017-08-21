import * as types from './actionTypes'

export const registerStart = () => ({
    type: types.REGISTER_START,
});

export const registerSuccess = user => ({
    type: types.REGISTER_SUCCESS,
    user: user
});

export const registerFailure = () => ({
    type: types.REGISTER_FAILURE,
});

