import * as types from '../actions/actionTypes';

const initialState = {
    loginButtonEnabled: true,
    registerButtonEnabled: true,
};

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                loginButtonEnabled: true,
            };
        }

        case types.LOGIN_START: {
            return {
                ...state,
                loginButtonEnabled: false,
            };
        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                loginButtonEnabled: true,
            };
        }

        case types.REGISTER_START: {
            return {
                ...state,
                registerButtonEnabled: false,
            };
        }

        case types.REGISTER_SUCCESS: {
            return {
                ...state,
                registerButtonEnabled: true,
            }
        }

        case types.REGISTER_FAILURE: {
            return {
                ...state,
                registerButtonEnabled: true,
            }
        }

        default: {
            return state;
        }
    }
}

export default uiReducer;