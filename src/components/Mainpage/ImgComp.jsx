import React, { Component } from 'react';
import './ImgComp.css';
import ImageList from './ImageList';

class ImgComp extends Component {
    miniature = Array.from (ImageList).filter ((value, index) => index % 2 === 0);
    link = '#';
    img = 'image';

    render () {
        return (
            <div className="img-container">
                <div className="main-img">
                    <img src={ImageList[1]} alt="" />
                </div>
                <div className="image-list">
                    <a href={this.link}>
                        <img src={ImageList[0]} alt="" />
                        <div className="bg-color"></div>
                    </a>
                    <a href={this.link}>
                        <img src={ImageList[2]} alt="" />
                        <div className="bg-color"></div>
                    </a>
                    <a href={this.link}>
                        <img src={ImageList[4]} alt="" />
                        <div className="bg-color"></div>
                    </a>
                    <a href={this.link}>
                        <img src={ImageList[6]} alt="" />
                        <div className="bg-color"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ImgComp;