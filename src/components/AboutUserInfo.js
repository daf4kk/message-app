import React, {useEffect} from 'react';
import './AboutUserInfo.css';
import addFriendIcon from './HomePage/imgs/invite.png';
const AboutUserInfo = ({neededUserId, aboutUser}) => {

    useEffect( () =>{
        
    }, [aboutUser])
    console.log(neededUserId)
    const {id, name, email, city, avatarSettings, friends} = neededUserId;
    console.log(name);

    return (
        <div className='about-user-info'>
            <div className='about-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
            </div>      
            <h1 className='about-user-name'>{name}</h1> 
            <div className='subsidiary-info'>
                <p>{email}</p>
                <p>{city}</p>
            </div>
            <div className='about-user-buttons'>
                <p className='about-user-write-message'
                onClick = { () => {
                    console.log('write msg')
                }
                    
                }
                >Написать сообщение</p>
                <img src = {addFriendIcon} alt = 'Добавить в друзья' className='about-user-invite'
                onCLick = {()=>{
                    console.log('add friend')
                }}
                ></img>
            </div>
            <p className='all-friends-title'>Друзья этого пользователя: </p>
        </div>
    );
};

export default AboutUserInfo;