import React, {useState, useEffect} from 'react';

import './FriendsWindow.css';

import friends from './imgs/friends.png';
import userImg from './imgs/romaGroup.png';


function FriendsWindow({users}){

    

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
        </div>
    )
}



export default FriendsWindow;