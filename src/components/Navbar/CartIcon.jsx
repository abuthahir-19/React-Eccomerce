import React, { Component } from 'react';
import './Navbar.css';

class CartIcon extends Component {
    render() {
        return (
            <div className="cart-icon">
                <div className="badge" id="badge_value">
                    
                </div>
                <img id='cart-icon-image' src="icons/icon-cart.svg" alt="cart-logo" />
            </div>
        );
    }
}

export default CartIcon;