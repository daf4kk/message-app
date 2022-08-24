import React from 'react';


import './MessageSection.css';

import arrow from './left-arrow.png';
import abstractBacground from './abstract.png';

function MessageSection({activeUser, messageWindowUser, setMessageWindowUser}){
    const {name, email, avatarSettings, city} = messageWindowUser;
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
                    </div>

                    
                    
                </div>

            </div>

            <form className = 'send-message-form browser-default'
            onSubmit = {(e)=>{
                e.preventDefault();
                console.log(`submit`)
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