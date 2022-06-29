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
    }

    function changeActiveTown(e){
        const list = document.querySelectorAll('.list-city');
        list.forEach((item) => {
            item.classList.remove('active-city');
        });
        e.target.classList.add('active-city');
    }

    function closeOptions(){
        setOptionsDisplay('none');
        setCitiesListDisplay('none');
    }   

    useEffect( () => {      //DidMount
        const towns = document.querySelectorAll('.list-city');
        towns.forEach((town) => {
            const townName = town.textContent;
            if (townName === city){
                town.classList.add('active-city');
            }else{
                town.classList.remove('active-city');
            }
        })

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape'){
                setCitiesListDisplay('none');
                setOptionsDisplay('none');
            }
        });
    }, []);


    useEffect( () =>{   //DidUpdate

        setTimeStamp(stampUrl);
        const interval = setInterval(() => {setTimeStamp(stampUrl)}, 60000);
           
        return () => {
            clearInterval(interval);
            
            
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
                <div className='options-wrapper'
                onClick = { (e) =>{     // close options by clicking in blind zone
                    const wrapperForClose = document.querySelector('.options-wrapper');
                    if (e.target === wrapperForClose){
                        closeOptions();
                    }
                }}>
                <div className='options'>
                    <img 
                    src = {options} alt = 'options'
                    onClick = {() => { 
                        if (optionsDisplay === 'none'){
                            setOptionsDisplay('flex');
                        }else{
                            closeOptions();
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
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Москва' , stampUrl: 'Europe/Moscow' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Москва</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Киев' , stampUrl: 'Europe/Kiev' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Киев</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Омск' , stampUrl: 'Asia/Omsk' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Омск</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Красноярск' , stampUrl: 'Asia/Krasnoyarsk' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Красноярск</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Чикаго' , stampUrl: 'America/Chicago' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Чикаго</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                setActiveUser({...activeUser, city: 'Минск' , stampUrl: 'Europe/Minsk' })
                                changeActiveTown(e);
                                closeOptions();
                            }}
                            >Минск</div>
                                      
                    </div>
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