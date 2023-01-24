import React, { createContext, useContext } from 'react';
import './CartCont.css';

const countContext = createContext();
const CartCont = ({ quan, clicked }) => {

    return (
        <countContext.Provider value={quan}>
            <div className='cart-list' id="cart-list" style={{ display : clicked ? 'block' : 'none'}}>
                <h3>Cart</h3>
                {quan > 0 ? <Content /> : <EmptyCart />}
            </div>
        </countContext.Provider>
    );
}

const Content = () => {
    const quan = useContext (countContext);
    return (
        <>
            <div id="cart-box" className="cart-box">
                <img id="product_photo" src="images/image-product-1-thumbnail.jpg" alt="img" />
                <div id="item-details" className="item-details">
                    <li><p id="cart-info">Fall Limited Edition Sneakers</p></li>
                    <li><p>$125.00 x </p></li>
                    <li><p id="number_of_quantity"> {quan}  </p></li>
                    <li><p id="total_price">&nbsp; {` $${quan * 125}`} </p></li>
                </div>
                <img id="delete_icon" src="icons/icon-delete.svg" alt="" onClick={() => console.log('items deleted !!')} />
                <p id="item-count"></p>
                <p id="empty"></p>
            </div>
            <button id="checkout_button">Checkout</button>
        </>
    );
}

const EmptyCart = () => {
    return (
        <div id="cart-box" className="cart-box">
            <p id="empty">Your cart is Empty</p>
        </div>
    );
}

export default CartCont;