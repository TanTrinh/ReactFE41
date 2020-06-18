import React, { Component } from 'react'
import BTLaptop from './BTLaptop'

export default class BTLaptopList extends Component {
    render() {
        return (
            <div>
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <BTLaptop/>
                </section>
            </div>

        )
    }
}
