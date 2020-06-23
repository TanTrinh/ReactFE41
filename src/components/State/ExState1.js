import React, { Component } from 'react'

export default class ExState1 extends Component {

    state = {
        like: 0
    }

    // Hàm xử lý tăng lượt like
    like = () => {
        let likeNumber = this.state.like + 1;
        this.setState({
            like: likeNumber
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4">Profile Lê Thị A</h3>

                <div className="card text-white bg-dark" style={{width:250}}>
                    <img className="card-img-top" src="https://picsum.photos/200" alt="123" style={{width:250}} />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: Lê Thị A ({this.state.like} <i className="fa fa-heart"></i>)</h4>
                        <p className="card-text">Tuổi: 18</p>
                    </div>
                </div>

                <div className="card text-white bg-default">
                    <div className="card-body text-dark">
                        <h4 className="card-title">Lượt thích ({this.state.like} <i className="fa fa-heart"></i>)</h4>
                        <button onClick={() =>{
                            this.like()
                        }} className="btn btn-default" style={{color:'red',border:'1px solid red'}}>Thả tim <i className="fa fa-heart"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}
