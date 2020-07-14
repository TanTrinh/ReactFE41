import {combineReducers} from 'redux'
import todosReducer from './todosReducer';
import gioHangReducer from './gioHangReducer';
import sinhVienReducer from './sinhVienReducer';

export default combineReducers({
    // todosReducer: todoReducer,
    todosReducer,
    gioHangReducer,
    sinhVienReducer,
});