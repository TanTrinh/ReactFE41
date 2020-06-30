import React, { Component } from 'react'

export default class BT2Product extends Component {

    render() {
        let {productData} = this.props;

        return (
            <div>
                <div className="card text-left" style={{border:'none'}}>
                    <img className="card-img-top" src={productData.image} alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{productData.name}</h4>
                        <p className="card-text">${productData.price}</p>
                        <button className="btn bg-dark text-light">Add to cart</button>
                    </div>
                </div>

            </div>
        )
    }
}
