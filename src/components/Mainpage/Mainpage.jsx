import React from 'react';
import './Mainpage.css';
import ImgComp from './ImgComp';
import ContentComp from './ContentComp';
import ImageDesc from './ImageDesc';
import { useState } from 'react';

const Mainpage = ({ addToCart, currCount, handleIncrement, handleDecrement }) => {
    const [imgClicked, setImgClicked] = useState (false);

    const handleImageClick = () => {
        setImgClicked (prevState => !prevState);
    }

    return (
        <>
            <section className="main-content wraper">
                <ImgComp isClicked={handleImageClick} />
                <ContentComp addToCart={addToCart} count={currCount} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
            </section>
            <ImageDesc clicked={imgClicked} clickClose={handleImageClick}/>
        </>
    );
}

export default Mainpage;