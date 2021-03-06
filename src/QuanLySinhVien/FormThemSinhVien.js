import React, { Component } from "react";
import { connect } from "react-redux";
import {
  themSinhVienAction,
  suaSinhVienAction,
  chonSinhVienAction,
} from "../actions/sinhVienActions";

export class FormThemSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
  };

  // Khi props sinhVienDangChon thay đổi, sẽ chạy lại componentDidUpdate
  // trong đây phải kiểm tra sinhVienDangChon có thay đổi hay ko
  // Nếu thay đổi sẽ setState lại object values bằng sinhVienDangChon mới
  componentDidUpdate(prevProps) {
    if (prevProps.sinhVienDangChon.maSV !== this.props.sinhVienDangChon.maSV) {
      this.setState({
        values: this.props.sinhVienDangChon,
      });
    }
  }

  handleChange = (event) => {
    // [variable] đây là cú pháp để lấy giá trị của biến và convert thành biến
    const { name, value } = event.target;
    this.setState(
      (state) => {
        return {
          values: {
            ...state.values,
            [name]: value,
          },
        };
      },
      //     {
      //     values: {
      //         [name]: value,
      //     },
      //     // [event.target.name]: event.target.value
      // }
      () => {
        console.log("Đã thay đổi", this.state.values);
      }
    );

    console.log("Chưa thay đổi", this.state.values);

    //Cách 2:
    // const values = {...this.state.values};
    // this.setState({
    //     ...values,
    //     [name]: values,
    // });
  };

  handleBlur = (event) => {
    const { name, value } = event.target;

    const error = this.validation(name, value);
    const state = this.state;
    this.setState({
      errors: {
        ...state.errors,
        [name]: error,
      },
    });
  };

  validation = (name, value) => {
    if (name === "maSV") {
      return value ? "" : "Mã sinh viên ko đc để trống";
    }

    if (name === "hoTen") {
      return value ? "" : "Họ tên sinh viên ko đc để trống";
    }

    if (name === "email") {
      if (!value) {
        return "Email ko đc để trống";
      }
      if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        return "Định dạng email ko hợp lệ";
      }
    }

    if (name === "soDT") {
      return value ? "" : "Số điện thoại ko đc để trống";
    }

    return "";
  };

  handleSubmit = () => {
    console.log(this.state);
    let hasError = false;
    const state = this.state;
    for (let key in this.state.values) {
      const error = this.validation(key, this.state.values[key]);
      if (error) {
        // line dưới do bất đồng bộ nên sẽ ko run đúng kết quả
        // this.setState({
        //     errors: {
        //         ...state.errors,
        //         [key]: error,
        //     }
        // });
        this.setState((state) => {
          return {
            errors: {
              ...state.errors,
              [key]: error,
            },
          };
        });

        hasError = true;
      }
    }

    if (hasError) return;

    // Xử lý gọi action themSinhVien
    this.props.themSinhVien(this.state.values);
  };

  huyCapNhat = () => {
      this.props.chonSinhVien({});
      this.setState({
          values: {
              maSV: '',
              hoTen: '',
              email: '',
              soDT: '',
          }
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div classname="col-sm-6">
            <div className="form-group">
              <label htmlFor>Mã SV</label>
              <input
                className="form-control"
                type="text"
                disabled={this.props.isUpdate}
                value={this.state.values.maSV}
                name="maSV"
                // onChange={event => {
                //     this.setState({ maSV: event.target.value})
                // }}
                onChange={this.handleChange}
                // onChange={this.handleChange(event)} - tương tự với đoạn trên
                onBlur={this.handleBlur}
              ></input>
              {this.state.errors.maSV && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.maSV}</span>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor>Số điện thoại</label>
              <input
                className="form-control"
                type="text"
                value={this.state.values.soDT}
                name="soDT"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              ></input>
              {this.state.errors.soDT && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.soDT}</span>
                </div>
              )}
            </div>
          </div>
          <div classname="col-sm-6">
            <div className="form-group">
              <label htmlFor>Họ Tên</label>
              <input
                className="form-control"
                type="text"
                value={this.state.values.hoTen}
                name="hoTen"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              ></input>
              {this.state.errors.hoTen && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.hoTen}</span>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor>Email</label>
              <input
                className="form-control"
                type="text"
                value={this.state.values.email}
                name="email"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              ></input>
              {this.state.errors.email && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {this.props.isUpdate ? (
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.suaSinhVien(this.state.values);
              }}
            >
              Cập nhật
            </button>
            <button
              className="btn btn-danger"
              onClick={this.huyCapNhat}
            >
              Hủy
            </button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Thêm
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sinhVienDangChon: state.sinhVienReducer.sinhVienDangChon,
    isUpdate: Object.keys(state.sinhVienReducer.sinhVienDangChon).length !== 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => dispatch(themSinhVienAction(sinhVien)),
    suaSinhVien: (sinhVien) => dispatch(suaSinhVienAction(sinhVien)),
    chonSinhVien: (sinhVien) => dispatch(chonSinhVienAction(sinhVien)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormThemSinhVien);
