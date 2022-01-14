import React, { Component } from 'react';
import './CartCont.css';

class CartCont extends Component {
    render () {
        return (
            <div className='cart-list' id="cart-list">
                <h3>Cart</h3>
                <div id="cart-box" className="cart-box">
                    <img id="product_photo" src="images/image-product-1-thumbnail.jpg" alt="img" />
                    <div id="item-details" className="item-details">
                        <li><p id="cart-info">Fall Limited Edition Sneakers</p></li>
                        <li><p>$125.00 x </p></li>
                        <li><p id="number_of_quantity"> </p></li>
                        <li><p id="total_price"></p></li>
                    </div>
                    <img id="delete_icon" src="icons/icon-delete.svg" alt="" onclick="deleteItems()" />
                    <p id="item-count"></p>
                    <p id="empty"></p>
                </div>
                <button id="checkout_button">Checkout</button>
            </div>
        );
    }
}

document.getElementById ('')
export default CartCont;