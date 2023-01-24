import React, { useState } from 'react';
import './Mainpage.css';

const ImgComp = ({ isClicked }) => {
    const [image, setImage] = useState ('images/image-product-1.jpg');
    return (
        <div id="image-section" className="image-section">
            <div className="main-image" id="main-image-section" onClick={isClicked}>
                <img src={image} alt="m-img"  onClick={() => console.log ('Displaying image details !!')} />
            </div>
            <div className="sub-image img-list">
                <img src="images/image-product-1-thumbnail.jpg" alt="img" id="1" onClick={() => setImage ("images/image-product-1.jpg")} />
                <img src="images/image-product-2-thumbnail.jpg" alt="img" id="2" onClick={() => setImage ("images/image-product-2.jpg")} />
                <img src="images/image-product-3-thumbnail.jpg" alt="img" id="3" onClick={() => setImage ("images/image-product-3.jpg")} />
                <img src="images/image-product-4-thumbnail.jpg" alt="img" id="4" onClick={() => setImage ("images/image-product-4.jpg")} />
            </div>
        </div>
    );
}

export default ImgComp;