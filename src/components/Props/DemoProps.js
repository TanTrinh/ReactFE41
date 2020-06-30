import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductItemRFC from './ProductItemRFC'

export default class DemoProps extends Component {
    render() {
        let product = {
            id:1,
            name:'Iphone X',
            price:1200
        }
        return (
            <div className="container">
                <input value="hello fe 41"></input>
                <ProductItem productData={product}/>

                <ProductItemRFC name={product.name}/>
            </div>
        )
    }
}
