export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginStart = () => ({
    type: LOGIN_START,
});

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    user: user,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const logout = () => ({
    type: LOGOUT,
});