import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CartModalRedux extends Component {
    render() {
        const tongTien = this.props.dsgh.reduce((total, sp) => {
            total += sp.giaBan * sp.soLuong;
            return total;
        }, 0)
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
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
                                                <td><img src={sp.hinhAnh} style={{width:50, height:50}}/></td>
                                                <td>{sp.maSP}</td>
                                                <td>{sp.tenSP}</td>
                                                <td>{sp.soLuong}</td>
                                                <td>{sp.giaBan}</td>
                                            </tr>
                                        ))}
                                        {this.props.dsgh.length && (
                                            <tr>
                                                <td colSpan="5">
                                                    <div className="d-flex w-100 justify-content-end">
                                                        Tổng tiển: {tongTien.toLocaleString()}
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
    }
}

export default connect(mapStateToProps) (CartModalRedux);