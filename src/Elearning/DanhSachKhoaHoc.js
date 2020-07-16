import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { layDanhSachKhoaHocAction, layDanhSachKhoaHoc } from '../actions/khoaHocActions';
import KhoaHoc from './KhoaHoc';


export class DanhSachKhoaHoc extends Component {
    // state = {
    //     dskh: [],
    // };

    componentDidMount() {
        // axios.get(
        //     "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        // ).then(result => {
        //     // this.setState({
        //     //     dskh: result.data,
        //     // })
        //     this.props.LayDanhSachKhoaHoc(result.data);
        // });
        this.props.LayDanhSachKhoaHoc();
    }

    render() {
        // console.log(this.state)
        const {dskh, loading, error} = this.props;

        if (loading) {
            // return <Loading/>
            return <p>Loading...</p>;
        }

        if (error) {
            // return <Error/>
            return (
                <div className="alert alert-danger">
                    <p>Something went wrong</p>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    {this.props.dskh.map(kh => (
                        <div className="col-sm-3" key={kh.maKhoaHoc}>
                            <KhoaHoc khoaHoc={kh}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dskh: state.khoaHocReducer.danhSachKhoaHoc,
        loading: state.khoaHocReducer.loading,
        error: state.khoaHocReducer.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LayDanhSachKhoaHoc: (dskh) => dispatch(layDanhSachKhoaHoc(dskh))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DanhSachKhoaHoc)