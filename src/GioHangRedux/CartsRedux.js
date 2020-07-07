import React, { Component } from 'react'
import ProductListRedux from './ProductListRedux'
import CartModalRedux from './CartModalRedux'

export default class CartsRedux extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Bài tập giỏ hàng Redux</h1>
                <div className="text-right">
                    <span style={{cursor: 'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart-arrow-down"></i> Giỏ hàng
                    </span>
                </div>
                <ProductListRedux/>
                <CartModalRedux/>
            </div>
        )
    }
}
