import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export default combineReducers({
    // the keys here are going to be the property of state that we are producing.
    user_reducer: userReducer

});