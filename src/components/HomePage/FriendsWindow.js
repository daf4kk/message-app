import React, {useState, useEffect} from 'react';

import './FriendsWindow.css';

import friendsIcon from './imgs/friends.png';
import spinner from './imgs/spinner.gif';




function FriendsWindow({users, activeUser,setActiveUser}){
    
    // const [friendsList, setFriendsList] = useState(<img src = {spinner} alt = 'spinner' className = 'spinner'></img>)
    const [friendsList, setFriendsList] = useState(<p className = 'no-friends'>У вас пока нет друзей</p>)


        useEffect( () => {
            const {friends} = activeUser;
            if (friends.length !== 0){
                let friendsObjects = [];
            
            while (friendsObjects.length < friends.length){ //friendsObjects.length можно сказать тот же самый i
                users.find((user) => {  // [friendsObjects.length]
                    if (user.id === friends[friendsObjects.length]){    
                        friendsObjects.push(user);
                    }
                })
            }
            const list = friendsObjects.map((user) => {
                const {name, avatarSettings, id} = user;
               
                return (
                    <>
                        <li className='user' key = {id}>
                        <div className='user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                            <p className = 'friend-name'>{name}</p>
                        </li>
                    </>
                )
            });
            setFriendsList(list);
            }
        }, [activeUser])

    
    return (
        <div className='friends-window'>
            <div className='block-info'>
                <img src = {friendsIcon} alt = 'friends-icon'></img>
                <p>Друзья</p>
            </div>
            <div className = 'allFriends'>
                <p className='title-of-field'>Ваши друзья:</p>
                <ul className='friends-list'>
                    {friendsList}
                </ul>
            </div>
        </div>
    )
}



export default FriendsWindow;