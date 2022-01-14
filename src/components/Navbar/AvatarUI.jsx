import React, { Component } from 'react';
import './Navbar.css';

class AvatarUI extends Component {
    render () {
        return (
            <div className="profile-section">
                <img src="images/image-avatar.png" alt="profile-logo" />
            </div>
        )
    }
}

export default AvatarUI;