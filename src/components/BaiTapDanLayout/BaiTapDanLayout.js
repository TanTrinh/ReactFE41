import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'
import BTLaptopList from './BTLaptopList'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTSlider/>
                <BTProductList/>
                <BTLaptopList/>
                <BTFooter/>
            </div>
        )
    }
}
