import {combineReducers} from 'redux'
import todosReducer from './todosReducer';
import gioHangReducer from './gioHangReducer';

export default combineReducers({
    // todosReducer: todoReducer,
    todosReducer,
    gioHangReducer,
});