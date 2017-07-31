import React from 'react';

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return( <button className="authorize-payment-btn">Pay Now {this.props.amount}</button> );
    }
}