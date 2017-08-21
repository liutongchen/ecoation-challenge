import * as types from './actionTypes'

export const updateNumberStart = () => ({
    type: types.UPDATE_NUMBER_START,
});

export const updateNumberSuccess = currentNumber => ({
    type: types.UPDATE_NUMBER_SUCCESS,
    currentNumber,
});

export const updateNumberFailure = () => ({
    type: types.UPDATE_NUMBER_FAILURE,
});
