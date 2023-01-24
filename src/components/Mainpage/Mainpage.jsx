import React from 'react';
import './Mainpage.css';
import ImgComp from './ImgComp';
import ContentComp from './ContentComp';

const Mainpage = ({ addToCart, currCount, handleIncrement, handleDecrement }) => {
    return (
        <section className="main-content wraper">
            <ImgComp />
            <ContentComp addToCart={addToCart} count={currCount} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        </section>
    );
}

export default Mainpage;