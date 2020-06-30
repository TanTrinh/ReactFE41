import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    productList = [
        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 4, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 }
    ]

    renderProduct = () => {
        let productJSX = this.productList.map((product, index) => {
            return <div className="col-3" key={index}>
                <BTProduct productData={product}/>
            </div>
        });
        return productJSX;
    }

    render() {

        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">

                    <div className="container-fluid">
                        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                        <div className="row">
                            {this.renderProduct()}
                        </div>
                    </div>
                    {/*  */}

                </section>
            </div>

        )
    }
}
