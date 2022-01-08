import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import './AvatarUI.css';

class AvatarUI extends Component {
    render () {
        return (
            <div className="profile-container">
                <Avatar 
                    src='/images/image-avatar.png'
                    alt='Profile'
                    className='avatar'
                />
            </div>
        );
    }
}

export default AvatarUI;