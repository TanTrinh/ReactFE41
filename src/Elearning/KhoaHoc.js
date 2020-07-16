import React, { Component } from "react";

export default class KhoaHoc extends Component {
  render() {
    const {khoaHoc} = this.props;

    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={khoaHoc.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
            <p className="card-text">{khoaHoc.moTa}</p>
          </div>
        </div>
      </div>
    );
  }
}
