import React, { Component } from 'react'

export default class BTProduct extends Component {
    render() {
        let {productData} = this.props
        return (
            <div>
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={productData.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{productData.tenSP}</h4>
                            <p className="card-text">BlackBerry is a line of smartphones, tablets, and services originally designed</p>
                            <a href="#" className="btn btn-primary">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
