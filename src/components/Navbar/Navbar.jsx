import React, { Component } from 'react';
import './Navbar.css';
import MenuList from './MenuList';
import CartIcon from './CartIcon';
import AvatarUI from './AvatarUI';


class Navbar extends Component {
    link = "https://www.google.com";
    state = {clicked : false}

    handleClick = () => {
        this.setState ({clicked: !this.state.clicked});
    }

    render () {
        return (
            <header className='header-container'>
                <div className="container">
                    <div className="nav-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className="logo">
                        <a href={this.link}>
                            <h2>sneakers</h2>
                        </a>
                    </div>
                    <div className="nav-links">
                        <ul className="list-container">
                            {MenuList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a 
                                            className={item.cName}
                                            href={item.url}
                                        >{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="icon-profile-section">
                        <CartIcon />
                        <AvatarUI />
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;