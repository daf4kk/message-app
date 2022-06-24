import React, {useState, useEffect} from 'react';

import './FriendsWindow.css';

import friends from './imgs/friends.png';
import userImg from './imgs/romaGroup.png';
import options from './imgs/options.png'


function FriendsWindow({users, activeUser, setActiveUser}){

    const [optionsDisplay, setOptionsDisplay] = useState('none');
    const [citiesListDisplay, setCitiesListDisplay] = useState('none')
    const [timeStamp, setStamp] = useState('');
    const date = timeStamp.substr(0, 10);
    const hours = timeStamp.substr(11,2);
    const minutes = timeStamp.substr(14,2);
    //props
    const {avatarSettings, name, id, city, stampUrl} = activeUser;
    const [logoSym, logoColor, backgroundColor] = avatarSettings;

    
    async function setTimeStamp(url){
        await fetch(`http://worldtimeapi.org/api/timezone/${url}`)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            setStamp(data.datetime);
        });
        console.log('get time')
    }


    useEffect( () =>{
        
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape'){
                setCitiesListDisplay('none');
                setOptionsDisplay('none');
            }
        });
        console.log('DidUpdate')
        // setTimeStamp(stampUrl);
        // setInterval(() => {setTimeStamp(stampUrl)}, 60000);
        setTimeStamp(stampUrl);
        const interval = setInterval(() => {setTimeStamp(stampUrl)}, 60000);
           
        return () => {
            clearInterval(interval);
            console.log('cleared')
            
        }
    },[activeUser]);  // Не забывать про [] !!!, в него прописывается то, что нам нужно отслеживать при изменений


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
                    <img 
                    src = {options} alt = 'options'
                    onClick = {(e) => { 
                        if (optionsDisplay === 'none'){
                            setOptionsDisplay('flex');
                        }else{
                            setOptionsDisplay('none');
                            setCitiesListDisplay('none');
                        }
                    }}
                    ></img>
                    <div className='options-list' style = {{display: `${optionsDisplay}`}}>
                        <div className='changeTimeStamp'>
                            <div 
                            className='change-city'
                            onClick = {() => {citiesListDisplay === 'none' ? setCitiesListDisplay('flex') : setCitiesListDisplay('none')}}
                            >
                                <p>Поменять город</p>
                            </div>
                        </div>
                        <div 
                        className='logout'
                        onClick = {() => {setActiveUser(0)}}
                        >
                            <p>Выйти из аккаунта</p>
                        </div>
                    </div>
                    <div className='cities-list' style = {{display: `${citiesListDisplay}`}}>
                            <div className='list-city active-city'
                            onClick = {()=> {
                                setTimeStamp('Europe/Moscow');
                                setActiveUser({...activeUser, city: 'Москва' , stampUrl: 'Europe/Moscow' })
                                console.log(activeUser);
                            }}
                            >Москва</div>

                            <div className='list-city'
                            onClick = {()=> {
                                setTimeStamp('Europe/Kiev')
                                setActiveUser({...activeUser, city: 'Киев' , stampUrl: 'Europe/Kiev' })
                                console.log(activeUser);
                            }}
                            >Киев</div>

                            <div className='list-city'
                            onClick = {()=> {
                                setTimeStamp('Asia/Omsk')
                                setActiveUser({...activeUser, city: 'Омск' , stampUrl: 'Asia/Omsk' })
                                console.log(activeUser);
                            }}
                            >Омск</div>

                            <div className='list-city'
                            onClick = {()=> {
                                setTimeStamp('Asia/Krasnoyarsk')
                                setActiveUser({...activeUser, city: 'Красноярск' , stampUrl: 'Asia/Krasnoyarsk' })
                                console.log(activeUser);
                            }}
                            >Красноярск</div>

                            <div className='list-city'
                            onClick = {()=> {
                                setTimeStamp('America/Chicago')
                                setActiveUser({...activeUser, city: 'Чикаго' , stampUrl: 'America/Chicago' })
                                console.log(activeUser);
                            }}
                            >Чикаго</div>

                            <div className='list-city'
                            onClick = {()=> {
                                setTimeStamp('Europe/Minsk')
                                setActiveUser({...activeUser, city: 'Минск' , stampUrl: 'Europe/Minsk' })
                                console.log(activeUser);
                            }}
                            >Минск</div>
                                      
                    </div>
                </div>
                <p className='active-user-id'>@{id}</p>
                <div className='time-stamp'>
                    <p className='user-city'>Ваш город: <span className = 'city'>{city}</span></p>
                    <div className = 'user-time-zone'>
                        <p className='date'>{date}</p>
                        <p className='time'>{hours}<span className='blink-animation'>:</span>{minutes}</p>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}



export default FriendsWindow;