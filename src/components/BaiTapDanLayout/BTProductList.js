import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">

                    <div className="container-fluid">
                        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                        <div className="row">
                            <div className="col-3">
                                <BTProduct />
                            </div>
                            <div className="col-3">
                                <BTProduct />
                            </div>
                            <div className="col-3">
                                <BTProduct />
                            </div>
                            <div className="col-3">
                                <BTProduct />
                            </div>
                        </div>
                    </div>
                    {/*  */}

                </section>
            </div>

        )
    }
}
