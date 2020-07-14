import React, { PureComponent } from 'react'

// PureComponent sẽ tự handle life cycle shouldComponentUpdate
// Nó chỉ compare được các giá trị primitive (string, number, boolean)
// Không nên lạm dụng/sử dụng PureComponent
export default class Pure extends PureComponent {
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
