import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = (name) => {
        alert("Hello " + name);
    }

    render() {
        return (
            <div className="container">
                event binding
                <br />
                {/* Cách 1 định nghĩa function trực tiếp */}
                {/* <button onClick={function() {
                    alert("Hello FE 41");
                }} id="btnShowMessage" className="btn btn-success">
                    Show Message
                </button> */}

                {/* Cách 2 định nghĩa function trực tiếp có tham số */}
                <button onClick={() => {
                    this.handleClick('Tân');
                }} id="btnShowMessage" className="btn btn-success">
                    Show Message
                </button>

                {/* Cách 3 truyền callback function => khi click function đó đc gọi */}
                {/* <button onClick={this.handleClick.bind(this, 'tân')} id="btnShowMessage" className="btn btn-success">
                    Show Message
                </button> */}
            </div>
        )
    }
}
