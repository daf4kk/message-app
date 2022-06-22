import React from 'react';

import './FriendsWindow.css';

import friends from './imgs/friends.png';
import userImg from './imgs/romaGroup.png';
import options from './imgs/options.png'


function FriendsWindow({users, activeUser}){
    const {avatarSettings, name, id} = activeUser;
    const [logoSym, logoColor, backgroundColor] = avatarSettings;
    return (
        <div className='friends-window'>
            <div className='block-info'>
                <img src = {friends} alt = 'friends-icon'></img>
                <p>Друзья</p>
            </div>
            <div className = 'allFriends'>
                <p>Ваши друзья:</p>
                <ul className='friends-list'>
                    <li className = 'user'>
                        <img src = {userImg} alt = 'avatar'></img>
                        <p>Roma</p>
                    </li>
                    <li className = 'user'>
                        <img src = {userImg} alt = 'avatar'></img>
                        <p>Roma</p>
                    </li>
                    <li className = 'user'>
                        <img src = {userImg} alt = 'avatar'></img>
                        <p>Roma</p>
                    </li>
                    <li className = 'user'>
                        <img src = {userImg} alt = 'avatar'></img>
                        <p>Roma</p>
                    </li>
                    
                </ul>
            </div>
            <div className='active-user-info'>
                <div className = 'user-avatar-name'>    
                    {/* <img src = {activeUser} alt = 'active-user-avatar'></img> */}
                    {/* <div className='avatarFromProps' style = {{backgroundColor: `rgb(${backgroundColor})` }}><p style = {{color: `rgba(${logoColor})`}}>{logoSym}</p></div> */}
                    <div className='avatarFromProps' style = {{backgroundColor: `rgba(${logoColor})` }}>
                        <p style = {{color: `rgba(${backgroundColor})`}}>{logoSym}</p>
                    </div>
                    {/* <div className='avatarFromProps' style = {{backgroundColor: `rgb(${backgroundColor})`, color: `rgba${logoColor}`}}><p>{logoSym}</p></div> */}
                    <p className='user-name'>{name}</p>
                </div>
                <div className='options'>
                    <img src = {options} alt = 'options'></img>
                </div>
                <p className='active-user-id'>@{id}</p>
            </div>
        </div>
    )
}



export default FriendsWindow;