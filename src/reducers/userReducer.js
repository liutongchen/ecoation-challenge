import * as types from '../actions/actionTypes';
import jquery from 'jquery';
import toastr from 'toastr';


const initialState = {
    hasLoggedIn: false,
    data: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                hasLoggedIn: true,
                data: action.user,
            };
        }

        case types.LOGIN_START: {
            const loginBtn = document.getElementById("loginBtn");
            loginBtn.style.backgroundColor = "light-grey";
            loginBtn.style.borderColor = "light-grey";
        }

        case types.LOGIN_FAILURE: {
            toastr.error("Please check your email and password!")
        }

        case types.LOGOUT: {
            return {
                hasLoggedIn: false,
                data: null,
            };
        }

        case types.REGISTER_START: {
            const registerBtn = document.getElementById("registerBtn");
            registerBtn.style.backgroundColor = "light-grey";
            registerBtn.style.borderColor = "light-grey";
        }

        case types.REGISTER_SUCCESS: {
            return {
                hasLoggedIn: true,
                data: action.user,
            }
        }

        case types.REGISTER_FAILURE: {
            toastr.error("Register failed");
        }

        default: {
            return state;
        }
    }
}

export default userReducer;