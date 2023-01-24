import React, { useState } from 'react';
import MenuList from './MenuList';
import AvatarUI from './AvatarUI';
import CartCont from '../Mainpage/CartCont';
import CartIcon from './CartIcon';
import './Navbar.css';

const Navbar = ({ final }) => {
    const [clicked, setClicked] = useState (false);
    const [menuShow, setMenuShow] = useState (false);
    
    const handleClick = () => {
        setClicked (prevState => !prevState);
    }

    return (
        <div>
            <header className="header-container">
                <i id="icon" className={menuShow ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setMenuShow (prevShow => !prevShow)}></i>
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
                    <CartIcon quan={final} onClick={handleClick} />
                    <AvatarUI />
                </div>
            </header>
            <CartCont quan={final} clicked={clicked} />
        </div>
    )
}

export default Navbar;