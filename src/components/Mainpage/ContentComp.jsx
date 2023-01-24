import React from 'react';
import './Mainpage.css';

const ContentComp = ({ addToCart, count, handleIncrement, handleDecrement}) => {
    return (
        <div className="content">
            <p>sneaker company</p>
            <h1 id="heading-content">Fall Limited Edition <br /> Sneakers</h1>
            <p id="desc">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className="price-details">
                <h2 id="p">$125.00</h2><span id="disc">50%</span>
            </div>
            <h4 id="actual-price"><strike>$250.00</strike></h4>
            <div className="quantity">
                <div className="inc-or-dec">
                    <button onClick={handleDecrement} id="minus_btn">
                        <img src="icons/icon-minus.svg" id="minus" alt="" />
                    </button>
                    <div className="quan_value" id="quantity_value">{count}</div>
                    <button onClick={handleIncrement} id="plus_btn">
                        <img src="icons/icon-plus.svg" id="plus" alt="" />
                    </button>
                </div>
                <div className="cart-button" onClick={addToCart}>
                    <button>
                        <img src="icons/icon-cart-white.svg" alt="" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContentComp;