import React, { Component } from 'react'
import BTCartModal from './BTCartModal'
import BTProductList from '../../BaiTapDanLayout/BTProductList'
import BTCartProductList from './BTCartProductList'

export default class BTCarts extends Component {
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ];

    // Lưu trữ giỏ hàng tại component chứa cả giao diện và nút thêm sản phẩm
    state = {
        gioHang: [
            // {maSP:1, hinhAnh: './img/sp_iphonex.png', tenSP: 'IphoneX', soLuong: 1, donGia: 1000}
        ]
    }

    // Chức năng thêm sản phẩm vào giỏ hàng
    themGioHang = (sanPham) => {
        console.log("Sản phẩm đc click", sanPham);

        // tạo ra 1 sản phẩm giỏ hàng
        let spGH = {
            maSP: sanPham.maSP,
            hinhAnh: sanPham.hinhAnh,
            tenSP: sanPham.tenSP,
            soLuong: 1,
            donGia: sanPham.giaBan
        }

        let gioHangCapNhat = [...this.state.gioHang];

        // Tìm sản phẩm mđc click có trong giỏ hàng hay chưa
        let index = gioHangCapNhat.findIndex(spGioHang => spGioHang.maSP === spGH.maSP)

        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGH);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tinhTongSoLuongGioHang = () => {
        return this.state.gioHang.reduce((tongSoLuong,spGH,index) => {
            return tongSoLuong += spGH.soLuong;
        }, 0)
    }

    xoaGioHang = (maSP) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    capNhatSoLuongSanPham = (maSP, operator) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if (index !== -1) {
            if (operator === 'plus') {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong <= 1) {
                    return this.xoaGioHang(maSP);
                }
                gioHangCapNhat[index].soLuong -= 1;
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
                <div className="text-right">
                    <span style={{cursor: 'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart-arrow-down"></i> ({this.tinhTongSoLuongGioHang()}) Giỏ hàng
                    </span>
                </div>
                <BTCartModal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} capNhatSoLuongSanPham={this.capNhatSoLuongSanPham}/>
                <BTCartProductList dataPhone={this.dataPhone} themGioHang={this.themGioHang}/>
            </div>
        )
    }
}
