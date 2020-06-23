import React, { Component } from 'react'

export default class State extends Component {
    userName = 'Tân';

    //State là 1 thuộc tính của component => khi state thay đổi giá trị thì giao diện render lại
    //Lưu ý: Các giá trị làm thay đổi giao diện thì đặt trong state.
    state = {
        isLogin: false
    }

    renderLogin = () => {
        if (this.state.isLogin) {
            return <button className="nav-link btn btn-primary">Hello {this.userName}</button>
        }
        return <button className="nav-link btn btn-success" onClick={this.login}>Đăng nhập</button>
    }

    login = () => {
        // this.state.isLogin = true; Không đc gán giá trị cho thuộc tính state trực tiếp
        // this.setState(newState): Phương thức của component thay đổi giá trị state hiện tại và render lại giao diện
        // setState là phương thức bất đồng bộ
        this.setState({
            isLogin: true
        }, () => {
            console.log(this.state.isLogin);
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Cybersoft</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                {this.renderLogin()}
                                {/* {this.isLogin ? <button className="nav-link btn btn-primary">Hello {this.userName}</button> : <button className="nav-link btn btn-success">Đăng nhập</button>} */}
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}