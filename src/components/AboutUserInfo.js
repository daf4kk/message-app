import React, {useEffect, useState} from 'react';
import './AboutUserInfo.css';
import addFriendIcon from './HomePage/imgs/invite.png';
function AboutUserInfo({neededUserId, users, activeUser, addOurRequests}){

    const [friendsList1, setFriendsList1] = useState([]);
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

        </div>
    </div>
    );
};

export default AboutUserInfo;