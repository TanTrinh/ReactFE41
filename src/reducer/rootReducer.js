import {combineReducers} from 'redux'
import todosReducer from './todosReducer';
import gioHangReducer from './gioHangReducer';
import sinhVienReducer from './sinhVienReducer';
import khoaHocReducer from './khoaHocReducer';

// tập hợp tất cả Reducer
export default combineReducers({
    // todosReducer: todoReducer,
    todosReducer,
    gioHangReducer,
    sinhVienReducer,
    khoaHocReducer,
});