import React, { Component } from 'react'
import BTCartProductItem from './BTCartProductItem'

export default class BTCartProductList extends Component {

    renderPhoneList = () => {
        let {dataPhone,themGioHang} = this.props;
        return dataPhone.map((phone, index) => {
            return <div key={index} className='col-4'>
                <BTCartProductItem themGioHang={themGioHang} phone={phone}/>
            </div>
        })
    }

    render() {

        return (
            <div className="row">
                {this.renderPhoneList()}
            </div>
        )
    }
}
