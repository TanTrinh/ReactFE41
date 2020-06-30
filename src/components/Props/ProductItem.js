import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        // this.props là thuộc tính của class component nhận giá trị từ component cha truyền vào, và ko đc gán lại giá trị khác
        // ES6
        // let {productData} = this.props;

        // ES5
        let productData =  this.props.productData;
        return (
            <div>
                <div className="card text-left bg-secondary" style={{width:300}}>
                    <img className="card-img-top" src="https://picsum.photos/300/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">{productData.name}</h4>
                        <p className="card-text">{productData.price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
