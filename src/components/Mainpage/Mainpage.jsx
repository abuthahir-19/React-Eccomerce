import React, { Component } from 'react';
import './Mainpage.css';
import ImgComp from './ImgComp';
import ContentComp from './ContentComp';

class Mainpage extends Component {
    render () {
        return (
            <section className="main-content wraper">
                <ImgComp />
                <ContentComp />
            </section>
        );
    }
}

export default Mainpage;