import React, {useEffect, useState} from 'react';
import './AboutUserInfo.css';
import addFriendIcon from './HomePage/imgs/invite.png';
function AboutUserInfo({neededUserId, users, activeUser, addOurRequests}){

    const [da,setDa] = useState({...activeUser}); //Во, должно быть начальное значение потом он как бы считывает еффект и находит именно тот что нам нужен
    useEffect( () =>{
        //Надеюсь завтра быстро вспомню что к чему
        users.find((user) => {                       
            // console.log(`about is ${neededUserId}`)
            if (user.id === neededUserId){
                setDa({...user})
                console.log(`setted ${JSON.stringify(user)}`);
                console.log(`wanted to find ${user.id}`)
            }
        });


    }, [neededUserId]);
    const {id, name, email, city, avatarSettings, friends} = da;
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
    const renderedList = list.map((friendObj) => {
        // const {frienId, friendName, friendAvatarSettings} = friendObj; //Неправильно !
        //Через деструктуризацию по какой то причине просто напросто не работает (блять я такой дебил я же деструктуризирую ну через as какой нибудь поэтому и было undefined...)
        //но если не так то как...
        //Видимо только так как сделал я
        return (
            <>
                <li className='about-user-friend' key = {`${friendObj.id}aboutFriend`}>
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
                console.log('add friend')
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