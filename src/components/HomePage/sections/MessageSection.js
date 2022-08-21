import React from 'react';


import './MessageSection.css';

import arrow from './left-arrow.png';

function MessageSection({activeUser, messageWindowUser, setMessageWindowUser}){
    const {name, email, avatarSettings, city} = messageWindowUser;
    return (
        <div className='message-section'>
            <div className='message-user-info-block'>
                <img src = {arrow} alt = 'Назад' className = 'return-back'
                onClick = {() => {
                    setMessageWindowUser()
                }}></img>
                <div className='message-user-info'>
                    <p className = 'user-name'>{name}</p>
                    <div className = 'user-sub-info'>
                        <p>{email}</p>
                        <p>{city}</p>
                    </div>
                </div>
                <div className='message-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                    <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                </div>
            </div>
        </div>
    )
}



export default MessageSection;