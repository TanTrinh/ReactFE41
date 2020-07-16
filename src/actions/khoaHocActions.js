import axios from "axios";
import * as actionType from "../constants/khoaHocConstants"

export const layDanhSachKhoaHocAction = (dskh) => {
    return {
        type: 'LAY_DANH_SACH_KHOA_HOC',
        dskh,
    }
}

export const layDanhSachKhoaHoc = () => {
    return (dispatch, getState) => {
        // const state = getState();
        // console.log(state);
        // Gọi API
        dispatch({
            type: actionType.GET_COURSES_LIST_REQUEST,
        });

        axios.get(
            "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        ).then(res => {
            // dispatch action mới
            dispatch({
                type: actionType.GET_COURSES_LIST_SUCCESS,
                dskh: res.data,
            })
            // dispatch(layDanhSachKhoaHocAction(res.data));
        }).catch(err => {
            dispatch({
                type: actionType.GET_COURSES_LIST_FAILED,
            })
        });
    };
};