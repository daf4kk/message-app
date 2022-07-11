import React, {useEffect, useState} from 'react';


import './UserInfo.css'

import options from '../imgs/options.png'


function UserInfo({users, activeUser, setActiveUser}){

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
        <div className='active-user-info'>

                <div className='settings-window'>
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
                        onClick = {() => {
                            setActiveUser(0)
                            window.location.reload()  // Нужно для localStorage ибо иначе он не обновляет город нашего user`a из localStorage при выходе из аккаунта и входе в него без перезагрузки                        
                            localStorage.removeItem('prevUser');    // localStorage лагает то ли что (если через F12 смотреть, то он или не обновляется (prevUser), или не удаляется, ХОТЯ РАБОТАЕТ ВСЁ ПРАВИЛЬНО)
                        }}
                        >
                            <p>Выйти из аккаунта</p>
                        </div>
                    </div>
                    <div className='cities-list' style = {{display: `${citiesListDisplay}`}}>
                            <div className='list-city active-city'
                            onClick = {(e)=> {
                                changeActiveTown(e);
                                closeOptions();
                                 //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`)); //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Москва', stampUrl: 'Europe/Moscow'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj)); // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Москва' , stampUrl: 'Europe/Moscow' })

                            }}
                            >Москва</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                
                                changeActiveTown(e);
                                closeOptions();
                                //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`)); //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Киев', stampUrl: 'Europe/Kiev'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj)); // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Киев' , stampUrl: 'Europe/Kiev' })
                            }}
                            >Киев</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                changeActiveTown(e);
                                closeOptions();
                                //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`)); //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Омск', stampUrl: 'Asia/Omsk'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj)); // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Омск' , stampUrl: 'Asia/Omsk' })
                            }}
                            >Омск</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                
                                changeActiveTown(e);
                                closeOptions();
                                //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`)); //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Красноярск', stampUrl: 'Asia/Krasnoyarsk'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj));   // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Красноярск' , stampUrl: 'Asia/Krasnoyarsk' }) 
                            }}
                            >Красноярск</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                
                                changeActiveTown(e);
                                closeOptions();
                                //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`)); //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Чикаго', stampUrl: 'America/Chicago'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj)); // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Чикаго' , stampUrl: 'America/Chicago' })
                            }}
                            >Чикаго</div>

                            <div className='list-city'
                            onClick = {(e)=> {
                                changeActiveTown(e);
                                closeOptions();
                                //Меняем в localStorage наш основной город  (Работать будет только для зарегистрированных пользователей ("не боты") )
                                const userObjFromLocalStorage = JSON.parse(localStorage.getItem(`User${id}`));  //Меняем свойства user`a в localStorage
                                const transformedUserObj = {...userObjFromLocalStorage, city: 'Минск', stampUrl: 'Europe/Minsk'}
                                localStorage.setItem(`User${id}`, JSON.stringify(transformedUserObj));
                                
                                // Меняем свойства нашего авторизироввнного пользователя в localStorage и cамом реакте (видимо придётся работать с объектами в паре)
                                localStorage.setItem('prevUser', JSON.stringify(transformedUserObj));    // При перезагрузке страницы в activeUser идёт prevUser, тоесть считывается тот что в localStorage
                                setActiveUser({...activeUser, city: 'Минск' , stampUrl: 'Europe/Minsk' })
                            }}
                            >Минск</div>
                                      
                    </div>
                </div>


                <div className='user-info'>
                    
                    <div className = 'user-avatar-name'>    
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
                        onClick = {() => {  
                            if (optionsDisplay === 'none'){
                                setOptionsDisplay('flex');
                            }else{
                                closeOptions();
                            }
                        }}
                        ></img>
                    </div>
                
                    <p className='active-user-id'>@{id}</p>
                    <div className='time-stamp'>
                        <p className='user-city'>Ваш город: <span className = 'city'
                        onClick = {() =>{
                          if (optionsDisplay === 'none'){
                            setCitiesListDisplay('flex');
                            setOptionsDisplay('flex');
                          }else{
                            closeOptions();
                          }
                        }}
                        >{city}</span></p>
                        <div className = 'user-time-zone'>
                            <p className='date'>{date}</p>
                            <p className='time'>{hours}<span className='blink-animation'>:</span>{minutes}</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}



export default UserInfo;