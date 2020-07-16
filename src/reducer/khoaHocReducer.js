import * as actionType from "../constants/khoaHocConstants";

const initialState = {
    danhSachKhoaHoc: [],
    loading: false,
    error: false,
}

const khoaHocReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_COURSES_LIST_REQUEST: {
            return {...state, loading: true, error: false};
        }
        case actionType.GET_COURSES_LIST_SUCCESS: {
            return {...state, danhSachKhoaHoc: action.dskh, loading: false, error: false};
        }
        case actionType.GET_COURSES_LIST_FAILED: {
            return {...state, loading: false, error: true};
        }
        default:
            return state;
    }
};

export default khoaHocReducer;