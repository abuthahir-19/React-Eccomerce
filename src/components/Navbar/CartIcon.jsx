import React from 'react';
import './Navbar.css';

const CartIcon = ({ quan, onClick }) => {
    return (
        <div className="cart-icon" onClick={onClick}>
            <div className="badge" id="badge_value" style={{display: quan === 0 ? 'none' : 'flex'}}>
                {quan}
            </div>
            <img id='cart-icon-image' src="icons/icon-cart.svg" alt="cart-logo" />
        </div>
    );
}

export default CartIcon;