import React, { Component } from 'react'

export default class BTCartProductItem extends Component {
    render() {
        let {phone,themGioHang} = this.props

        return (
            <div>
                <div className="card text-dark">
                    <img className="card-img-top" src={phone.hinhAnh}style={{}} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <p className="card-text">{phone.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                            themGioHang(phone)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>

            </div>
        )
    }
}
