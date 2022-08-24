import React, {useEffect, useState} from 'react';
import './AboutUserInfo.css';

import addFriendIcon from './imgs/invite.png'
function AboutUserInfo({setNeededUserId,neededUserId, users, activeUser, addOurRequests, setMessageWindowUser}){

    const [da,setDa] = useState({...activeUser}); //Во, должно быть начальное значение потом он как бы считывает еффект и находит именно тот что нам нужен
    useEffect( () =>{
        //Надеюсь завтра быстро вспомню что к чему
        users.forEach((user) => {                       
            if (user.id === neededUserId){
                setDa({...user})
            }
        });


    }, [neededUserId]);
    const {name, email, city, avatarSettings, friends} = da;
    // 3 или сколько там
    // так получается тут нужно друзей обрабатывать нет?
    let list = [];
    //Можно перебирать friends и fiend сразу в users
    users.forEach((user) => {
        friends.forEach((friendId) =>{
            if (user.id === friendId){
                list.push(user);
            }
        })
        
    });
    if (list.length !== friends.length){    //Так как у нас в users нет активного пользователя,
        list.push(activeUser)       //то если наш массив с объектами друзей (list) меньше массива из id с друзьями выделенного пользователя (friends)
                                    //означает что мы либо удалили этого друга из бд (так что нужно быть осторожнее), либо мы просто напросто не нашли объект activeUser`a в users, значит надо его добавить
    }
    const renderedList = list.map((friendObj) => {
        // const {frienId, friendName, friendAvatarSettings} = friendObj; //Неправильно !
        //Через деструктуризацию по какой то причине просто напросто не работает (блять я такой дебил я же деструктуризирую ну через as какой нибудь поэтому и было undefined...)
        //но если не так то как...
        //Видимо только так как сделал я
        return (
            <>
                <li className='about-user-friend' key = {`${friendObj.id}aboutFriend`}
                onClick = {()=>{
                    setNeededUserId(friendObj.id)
                }}>
                <div className='about-user-user-avatar' style = {{backgroundColor: `rgba(${friendObj.avatarSettings[1]})` }}>
                    <p style = {{color: `rgba(${friendObj.avatarSettings[2]})`}}>{friendObj.avatarSettings[0]}</p>
                </div>
                    <p className = 'about-user-friend-name'>{friendObj.name}</p>
                </li>

            </>
        )
    });
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
            onClick = {()=>{

                addOurRequests(da.id)
            }}
            ></img>
        </div>
        <p className='all-friends-title'>Друзья этого пользователя: </p>
        <div className='about-friends-list'>
            {renderedList}
        </div>
    </div>
    );
};

export default AboutUserInfo;