import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangSoLuong, giamSoLuong } from "../actions/gioHangActions";
import { tinhTongTien } from "../selectors/gioHangSelectors";

export class CartModalRedux extends Component {
    render() {
        // const tongTien = this.props.dsgh.reduce((total, sp) => {
        //     total += sp.giaBan * sp.soLuong;
        //     return total;
        // }, 0)
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Hình ảnh</th>
                                            <th>Mã SP</th>
                                            <th>Tên SP</th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.dsgh.map((sp) => (
                                            <tr>
                                                <td><img src={sp.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                                                <td>{sp.maSP}</td>
                                                <td>{sp.tenSP}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() =>
                                                        this.props.giamSoLuong(sp.maSP)
                                                    }>-</button>
                                                    <span className="mx-2">{sp.soLuong}</span>
                                                    <button className="btn btn-primary" onClick={() => {
                                                        this.props.tangSoLuong(sp.maSP)
                                                    }}>+</button>
                                                </td>
                                                <td>{sp.giaBan}</td>
                                            </tr>
                                        ))}
                                        {this.props.dsgh.length && (
                                            <tr>
                                                <td colSpan="5">
                                                    <div className="d-flex w-100 justify-content-end">
                                                        Tổng tiển: {this.props.tongTien}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dsgh: state.gioHangReducer.danhSachGioHang,
        // 1 cách khác ở bên dưới
        // tongTien: state.gioHangReducer.danhSachGioHang.reduce((total, sp) => {
        //     total += sp.giaBan * sp.soLuong;
        //     return total;
        // }, 0),
        tongTien: tinhTongTien(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Hạn chế viết như bên dưới
        // tangSoLuong: (maSP) => dispatch({type: "TANG_SO_LUONG", maSP})
        tangSoLuong: (maSP) => dispatch(tangSoLuong(maSP)),
        giamSoLuong: (maSP) => dispatch(giamSoLuong(maSP)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);