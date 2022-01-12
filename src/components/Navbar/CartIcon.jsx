import React, { Component } from 'react';
import CartLogo from '../../icons/icon-cart.svg';
import './CartIcon.css';
class CartIcon extends Component {
    state = {cartClicked: false}
    
    render () {
        return (
            <div className="cart-logo-container">
                <img
                    src={CartLogo} alt="Cart-Logo" 
                    className='img-tag'
                />
            </div>
        );
    }
}

export default CartIcon;