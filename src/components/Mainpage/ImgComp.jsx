import React, { useState } from 'react';
import './Mainpage.css';
import imagesArray from './imageList';
const ImgComp = ({ isClicked }) => {
    const [image, setImage] = useState ('images/image-product-1.jpg');
    const [count, setCount] = useState (0);
    return (
        <div id="image-section" className="image-section">
            <div className="swipe-icon prev_div main_page_image" onClick={async () => 
            {
                if (count > 0) await setCount (c => c - 1);
                else await setCount (3);
                await setImage (imagesArray[count]);
            }}>
                <img id="previous_icon" src="icons/icon-previous.svg" alt="previous_icon" />
            </div>
            <div className="main-image" id="main-image-section" onClick={isClicked}>
                <img src={image} alt="m-img"/>
            </div>
            <div className="sub-image img-list">
                <img src="images/image-product-1-thumbnail.jpg" alt="img" id="1" onClick={() => setImage ("images/image-product-1.jpg")} />
                <img src="images/image-product-2-thumbnail.jpg" alt="img" id="2" onClick={() => setImage ("images/image-product-2.jpg")} />
                <img src="images/image-product-3-thumbnail.jpg" alt="img" id="3" onClick={() => setImage ("images/image-product-3.jpg")} />
                <img src="images/image-product-4-thumbnail.jpg" alt="img" id="4" onClick={() => setImage ("images/image-product-4.jpg")} />
            </div>
            <div className="swipe-icon next_div main_page_image" onClick={async () => {
                await setCount (c => (c+1) % 4);
                await setImage (imagesArray[count]);
            }}>
                <img id="next_icon" src="icons/icon-next.svg" alt="next_icon" />
            </div>
        </div>
    );
}

export default ImgComp;