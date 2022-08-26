import React, {useState} from 'react';


import './MessageSection.css';

import arrow from './left-arrow.png';

function MessageSection({activeUser, messageWindowUser, setMessageWindowUser}){

    const [messageHandler, changeMessageHandler] = useState(); 
    console.log(`da is ${messageHandler}`)
    const {name, email, avatarSettings, city} = messageWindowUser;      //Это тот пользователь сообщения которому мы хотим отправлять

    //Тоесть логика такова

    // Нам нужно получить свойства с сообщениями у активного юзера и messageWindowUser

    // Далее соединяем эти массивы

    // Ну и перебираем через .map, там условие по условному так сказать type Для определения родителя сообщения

    // !Важно ! В массиве должны храниться объекты, у них должно быть свойство по которому я буду определять, 
    //отображать данное сообщение как активного пользователя или того, с кем мы общаемся

    return (
        <div className='message-section'>
            <div className='message-user-info-block'>
                <img src = {arrow} alt = 'Назад' className = 'return-back'
                onClick = {() => {
                    setMessageWindowUser()
                }}></img>
                <div className='message-user-info'>
                    <p className = 'user-name'>{name}</p>
                    <div className = 'user-sub-info'>
                        <p>{email}</p>
                        <p>{city}</p>
                    </div>
                </div>
                <div className='message-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                    <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                </div>
            </div>
            <div className='messages-window-wrapper'>
                <div className='messages-window'>

                    {/* <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Привет арк</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div>

                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Иван Марголдин лучший музыкант в мире</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div>

                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Привет арк</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div>

                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Привет арк</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div>

                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Привет арк</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div>

                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                        <p className='message-content gotten-message-content'>Привет арк</p>
                    </div>

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>Привет варден</p>
                    </div> */}

                    
                    
                </div>

            </div>

            <form className = 'send-message-form browser-default'
            onSubmit = {(e)=>{
                e.preventDefault();
                const inputValue = document.querySelector('.send-message-input').value;
                console.log(`inputValue is ${inputValue}`);
                changeMessageHandler(inputValue);
            }}>
                <input type = 'text' placeholder = 'Напишите сообщение' className = 'browser-default send-message-input'></input>
                <button type = 'submit' className = 'send-message-button browser-default'
                onClick = {()=>{
                    
                }}>Отправить</button>
            </form>
        </div>
    )
}



export default MessageSection;