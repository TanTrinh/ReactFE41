import React, { Component } from 'react'
import BT2Product from './BT2Product'

export default class BT2ProductList extends Component {

    renderProduct = () => {
        return this.props.arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <BT2Product productData={product}/>
            </div>
        });
    };

    render() {
        return (
            <div>
                <section id="" className="container-fluid pt-5 pb-5">

                    <div className="container-fluid">
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
