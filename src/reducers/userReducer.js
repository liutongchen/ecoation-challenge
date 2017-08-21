import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/loginActions';

const initialState = {
    hasLoggedIn: false,
    data: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                hasLoggedIn: true,
                data: action.user,
            };
        }

        case LOGOUT: {
            return {
                hasLoggedIn: false,
                data: null,
            };
        }

        default: {
            return state;
        }
    }
}

export default userReducer;