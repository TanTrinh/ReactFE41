import React, { Component } from 'react'

export default class Child extends Component {
    // Chạy sau khi state, hoặc props thay đổi, và chạy trước render
    // Nếu mình return về true thì hàm render sẽ được chạy
    // return về false thì hàm render sẽ không đc gọi lại
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name === 'CyberSoft') {
            return true
        }
        return false;
    }

    // Chạy lại sau khi props thay đổi và chạy trước
    // shouldComponentUpdate
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    // Thay thế cho componentWillReceiveProps
    // Chạy sau khi props thay đổi và chạy trước sholdComponentUpdate
    // Dùng để thay đổi state khi props thay đổi
    // Ít sử dụng
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name === 'CyberSoft') {
            return {
                currentName: nextProps.name
            }
        }
        return null
    }

    componentDidUpdate() {
        console.log('Child: componentDidUpdate')
    }

    // Chạy trước khi component bị huỷ đi
    // clearTimeout, clearInterval, removeAddEventListener
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('Child render');
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
