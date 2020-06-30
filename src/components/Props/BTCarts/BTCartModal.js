import React, { Component } from 'react'

export default class BTCartModal extends Component {

    renderGioHang = () => {
        let {gioHang, xoaGioHang} = this.props;

        return gioHang.map((spGH, index) => {
            return <tr>
                <td>{spGH.maSP}</td>
                <td><img style={{ width: 50, height: 50 }} src={spGH.hinhAnh} alt="123" /></td>
                <td>{spGH.tenSP}</td>
                <td>
                    <button className="btn btn-primary">+</button>
                    {spGH.soLuong}
                <button className="btn btn-primary">-</button>
                </td>
                <td>{spGH.donGia}</td>
                <td>{spGH.soLuong * spGH.donGia}</td>
                <td><button onClick={() => {
                    xoaGioHang(spGH.maSP)
                }} className="btn btn-danger">Xóa</button></td>
            </tr>
        })
    }

    tinhTongTien = () => {
        return this.props.gioHang.reduce((tongTien, spGH, index) => {
            return tongTien += spGH.soLuong * spGH.donGia;
        }, 0)
    }

    render() {

        return (
            <div>
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content" style={{ width: '800px' }}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã SP</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên SP</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <td colSpan="5"></td>
                                            <td>Tổng Tiền</td>
                                            <td>{this.tinhTongTien()}</td>
                                        </tfoot>
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

            </div>
        )
    }
}
