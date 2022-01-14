import React, { Component, Fragment } from 'react';
import MenuList from './MenuList';
import CartIcon from './CartIcon';
import AvatarUI from './AvatarUI';
import CartCont from '../Mainpage/CartCont';
import './Navbar.css';

class Navbar extends Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState ({clicked : !this.state.clicked});
    }

    render () {
        return (
            <Fragment>
                <header class="header-container">
                    <i id="icon" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={this.handleClick}></i>
                    <h2>sneakers</h2>
                    <ul id="links-container" className="links-container">
                        {MenuList.map ((item, index) => {
                            return (
                                <li key={index}>
                                    <a 
                                        href={item.url}
                                        className={item.cName}
                                    >{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="cart-profile-section">
                        <CartIcon onClick={this.handleClick} />
                        <AvatarUI />
                    </div>
                </header>
                <CartCont />
            </Fragment>
        )
    }
}

export default Navbar;