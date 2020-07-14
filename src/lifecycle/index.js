import React, { Component } from 'react'
import Child from './Child'
import Pure from './Pure'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)

        console.log('Constructor');
        this.state = {
            name: ""
        }
    }

    // Chạy 1 lần trc khi hàm render đc gọi
    // Hàm này hiện ko còn đc sử dụng ở react phiên bản mới
    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    // Được chạy 1 lần sau khi hàm render chạy xong
    // Gọi API, tương tác với DOM, setTimeout, setInterval
    // Những hoạt động liên quan tới side effect
    componentDidMount() {
        console.log('componentDidMount')
    }

    // Chạy sau khi state hoặc props thay đổi
    // Chạy sau hàm render
    // setState, gọi API, ...
    // Cần có điều kiện dừng khi setState trong componentDidUpdate
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // Chạy sau khi state hoặc props thay đổi
    // Nhưng mà nó chạy trước thng render
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1 className="text-center">Life Cycle</h1>
                <button onClick={() => {
                    this.setState({
                        name: 'ABC'
                    })
                }}>Click</button>
                <button onClick={() => this.forceUpdate()}>Force Update</button>
                {
                    this.state.name !== 'CyberSoft'
                    ? <Child name={this.state.name}/>
                    : null
                }

                <Pure name="ABC"/>
            </div>
        )
    }
}
