import React, { Component } from 'react';
import './Mainpage.css';

class ImgComp extends Component {
    render () {
        return (
            <div id="image-section" className="image-section">
                <div className="main-image" id="main-image-section">
                    <img src="images/image-product-1.jpg" alt="m-img"  onClick={() => console.log ('Displaying image details !!')} />
                </div>
                <div className="sub-image img-list">
                    <img src="images/image-product-1-thumbnail.jpg" alt="img" id="1" onClick={() => console.log ('Rendering image details !!')} />
                    <img src="images/image-product-2-thumbnail.jpg" alt="img" id="2" onClick={() => console.log ('Rendering image details !!')} />
                    <img src="images/image-product-3-thumbnail.jpg" alt="img" id="3" onClick={() => console.log ('Rendering image details !!')} />
                    <img src="images/image-product-4-thumbnail.jpg" alt="img" id="4" onClick={() => console.log ('Rendering image details !!')} />
                </div>
            </div>
        );
    }
}

export default ImgComp;