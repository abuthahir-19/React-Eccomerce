import React, { Component } from 'react';
import './Mainpage.css';

class ContentComp extends Component {
    state = {count : 0}

    handleIncrement = () => {
        this.setState (prevCount => ({count : prevCount.count + 1}))
    }

    handleDecrement = () => {
        if (this.state.count >= 1)
        this.setState (prevCount => ({count: prevCount.count - 1}));
    }

    render () {
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
                        <button onClick={this.handleDecrement} id="minus_btn">
                            <img src="icons/icon-minus.svg" id="minus" alt="" />
                        </button>
                        <div className="quan_value" id="quantity_value">{this.state.count}</div>
                        <button onClick={this.handleIncrement} id="plus_btn">
                            <img src="icons/icon-plus.svg" id="plus" alt="" />
                        </button>
                    </div>
                    <div className="cart-button" onclick="addToCart()">
                        <button>
                            <img src="icons/icon-cart-white.svg" alt="" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentComp;