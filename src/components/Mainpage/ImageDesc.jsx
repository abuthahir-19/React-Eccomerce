import React from "react";
import { useState } from "react";
import './Mainpage.css';
import imagesArray from "./imageList";

const ImageDesc = ({ clicked, clickClose }) => {
    const [image, setImage] = useState ('images/image-product-1.jpg');
    const [count, setCount] = useState (0);
    return (
        <div id="image-wrapper" className="image-wrapper" style={{display : clicked ? 'block' : 'none'}}>
            <div id="image-details" className="image-details">
                <img id="close-icon-detail-image" src="icons/icon-close-orange.svg" alt="" onClick={clickClose} />
                <div id="big-image" className="big-image">
                    <div className="swipe-icon prev_div" onClick={async () => {
                        if (count > 0) await setCount (count - 1);
                        else await setCount (3);
                        await setImage (imagesArray[count]);
                    }}>
                        <img id="previous_icon" src="icons/icon-previous.svg" alt="previous_icon" />
                    </div>
                    <img id="main_image" src={image} alt="main_image" />
                    <div className="swipe-icon next_div" onClick={async () => {await setCount ((count + 1) % 4); await setImage (imagesArray[count])}}>
                        <img id="next_icon" src="icons/icon-next.svg" alt="next_icon" />
                    </div>
                </div>
                <div className="sublist-images">
                    <img id="5" src="images/image-product-1-thumbnail.jpg" alt="" onClick={() => setImage ('images/image-product-1.jpg')} />
                    <img id="6" src="images/image-product-2-thumbnail.jpg" alt="" onClick={() => setImage ('images/image-product-2.jpg')} />
                    <img id="7" src="images/image-product-3-thumbnail.jpg" alt="" onClick={() => setImage ('images/image-product-3.jpg')} />
                    <img id="8" src="images/image-product-4-thumbnail.jpg" alt="" onClick={() => setImage ('images/image-product-4.jpg')} />
                </div>
            </div>
        </div>
    );
}

export default ImageDesc;