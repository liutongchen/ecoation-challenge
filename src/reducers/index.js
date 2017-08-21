import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
    ui,
    user,
});

export default rootReducer;