import React, { Component } from 'react';
import './CartCont.css';

class CartCont extends Component {
    render () {
        return (
            <div className="cart-box-container">
                <h3>Cart</h3>
                <div className="cart-details">
                    <p>Your cart is empty.</p>
                </div>
            </div>
        );
    }
}

export default CartCont;