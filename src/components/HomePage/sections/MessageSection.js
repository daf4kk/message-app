import React, {useState, useEffect} from 'react';


import './MessageSection.css';

import arrow from './left-arrow.png';

function MessageSection({activeUser, messageWindowUser, setMessageWindowUser, setActiveUser}){

    const [messageHandler, changeMessageHandler] = useState(); 
    const {name, email, avatarSettings, city } = messageWindowUser;      //Это тот пользователь сообщения которому мы хотим отправлять
    const [renderedMessages, setRenderedMessages] = useState();
    
    useEffect(()=>{
        const ourBlockInDOM = document.querySelector('.messages-window');
        setTimeout(()=>{ourBlockInDOM.scrollTop = 10000}, 1);
            // Так как мы не можем деструктуризировать свойство нашего активного пользователя с сообщениями у messageWindowUser через {... , ...,activeUser.id} = messageWindowUser, То
        let userKeysWithValue = Object.entries(messageWindowUser) ; //Данный метод позволяет выводить каждое свойство и его значение в виде массива
        let friendMessages; //Первый массив с сообщениями (сообщения друга для активного пользователя в виде объекта!)
        userKeysWithValue.forEach((arr) => {
            if (arr[0] === activeUser.id){  //arr[0] это ключ свойства, тоесть id пользователя для которого отправляем сообщение
                friendMessages = arr[1]
            }
        });
        ///
            // Наши сообщения вполне можно было бы загружать в бд только после того, как мы сменили секцию/поменяли пользователя с которым хотим общаться
            // Но для этого понадобился бы ещё один эффект, из за этого я вообще без понятия какой метод будет быстрее

        ////
        let activeUserKeysWithValue = Object.entries(activeUser) ; //Данный метод вроде как позволяет выводить каждое свойство и его значение в виде массива
        let activeUserMessages; //Второй массив с сообщениями (сообщения активного пользователя для друга в виде объекта!)

        let keyOfObjForRegistrNewMessage;
        activeUserKeysWithValue.forEach((arr) => {
            if (arr[0] === messageWindowUser.id){   //arr[0] это ключ свойства, тоесть id пользователя для которого отправляем сообщение
                keyOfObjForRegistrNewMessage = arr[0];
                activeUserMessages = arr[1]
            }
        });

        const rowArray = [...friendMessages, ...activeUserMessages];    //row это типа сырой на англ
        
        //Тут промежуточный массив нужен (отсортированный по дате отправления)
        //Сортирует вроде как правильно
        const transitionalArrayForSorting = rowArray.sort((a,b) => new Date(a.date) - new Date(b.date)) //Промежуточный

        const finishedArray = transitionalArrayForSorting.map((obj) => {
            const {by, content} = obj;
            const activeUserArr = by === activeUser.id; // Проверяем, это сообщение от друга или от нас самих
            if (activeUserArr){ //Это сообщение от нашего пользователя
                return (

                    <div className='sended-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
                        </div>
                        <p className='message-content sended-message-content'>{content}</p>
                    </div>
                )
            }else{  //Это сообщение от друга
                
                return (
                    <div className='gotten-message message'>
                        <div className='message-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                    <p className='message-content gotten-message-content'>{content}</p>
                    </div>
                )
            }
        });
        setRenderedMessages(finishedArray);

        if (messageHandler !== undefined && messageHandler.length !== 0){
            const newMessageForDB = {
                by: activeUser.id,
                date: Date(),
                content: messageHandler
            }
            const activeUserObjForEdit = {...activeUser};

            activeUserObjForEdit[keyOfObjForRegistrNewMessage].push(newMessageForDB)        //В js`e есть такая штука obj[name] = value, це как бы то же самое. 
                                                                                            //Прекол в том что в name может быть константа с каким то содержимым
            setActiveUser(activeUserObjForEdit);
            localStorage.setItem('prevUser', JSON.stringify(activeUserObjForEdit));
            localStorage.setItem(`User${activeUser.id}`, JSON.stringify(activeUserObjForEdit))
            document.querySelector('.send-message-input').value = '';
            changeMessageHandler('')

            
            setTimeout(()=>{ourBlockInDOM.scrollTop = 10000}, 1); //При каждом обновлений у нас скролл уходит в самый конец к новым сообщениям, таймаут нужен чтоб дать DOM прогрузить наше сообщение
            
        }
        

    },[messageWindowUser, activeUser, messageHandler])

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
                    {renderedMessages}
                  
                </div>

            </div>

            <form className = 'send-message-form browser-default'
            onSubmit = {(e)=>{
                e.preventDefault();
                const inputValue = document.querySelector('.send-message-input').value;
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