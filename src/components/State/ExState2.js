import React, { Component } from 'react'

export default class ExState2 extends Component {

    state = {
        src: './img/CarBasic/products/black-car.jpg'
    }

    // chooseCarColor = (color) => {
    //     if (color === 'red') {
    //         this.setState({
    //             src: './img/CarBasic/products/red-car.jpg'
    //         })
    //     } else if (color === 'silver') {
    //         this.setState({
    //             src: './img/CarBasic/products/silver-car.jpg'
    //         })
    //     } else {
    //         this.setState({
    //             src: './img/CarBasic/products/black-car.jpg'
    //         })
    //     }
    // }

    chooseCarColor = (color) => {
        let newSrc = `./img/CarBasic/products/${color}-car.jpg`;
        this.setState({
            src: newSrc
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.src} alt="123" style={{ width: '100%' }} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button onClick={() => {
                                    this.chooseCarColor('red')
                                }} className="btn" style={{ background: 'red' }}>Red color</button>
                            </div>

                            <div className="col-4">
                                <button onClick={() => {
                                    this.chooseCarColor('silver')
                                }} className="btn" style={{ background: 'silver' }}>Silver color</button>
                            </div>

                            <div className="col-4">
                                <button onClick={() => {
                                    this.chooseCarColor('black')
                                }} className="btn" style={{ background: 'black', color: 'white' }}>Black color</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
