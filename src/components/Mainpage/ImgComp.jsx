import React, { Component } from 'react';
import './Mainpage.css';

class ImgComp extends Component {
    render () {
        return (
            <div id="image-section" className="image-section">
                <div className="main-image" id="main-image-section">
                    <img src="images/image-product-1.jpg" alt="m-img"  onclick="displayImageDetails()" />
                </div>
                <div className="sub-image img-list">
                    <img src="images/image-product-1-thumbnail.jpg" alt="img" id="1" onclick="renderAsMainImage (1)" />
                    <img src="images/image-product-2-thumbnail.jpg" alt="img" id="2" onclick="renderAsMainImage (2)" />
                    <img src="images/image-product-3-thumbnail.jpg" alt="img" id="3" onclick="renderAsMainImage (3)" />
                    <img src="images/image-product-4-thumbnail.jpg" alt="img" id="4" onclick="renderAsMainImage (4)" />
                </div>
            </div>
        );
    }
}

export default ImgComp;