import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chonSinhVienAction, xoaSinhVienAction } from '../actions/sinhVienActions'


export class TableSinhVien extends Component {
    render() {
        return <table class="table">
            <thead>
                <tr>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {this.props.danhSachSinhVien.map((sv) => (
                    <tr>
                        <td>{sv.maSV}</td>
                        <td>{sv.hoTen}</td>
                        <td>{sv.soDT}</td>
                        <td>{sv.email}</td>
                        <td>
                            <button className="btn btn-success mr-2" onClick={() => {
                                this.props.chonSinhVien(sv)
                            }}>Sửa</button>
                            <button className="btn btn-success" onClick={() => {
                                this.props.xoaSinhVien(sv.maSV)
                            }}>Xoá</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachSinhVien: state.sinhVienReducer.danhSachSinhVien
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chonSinhVien: (sinhVien) => dispatch(chonSinhVienAction(sinhVien)),
        xoaSinhVien: (maSV) => dispatch(xoaSinhVienAction(maSV))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TableSinhVien)