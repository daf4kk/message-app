import React, {useState, useEffect} from 'react';


import './MessageSection.css';

import arrow from './left-arrow.png';

function MessageSection({activeUser, messageWindowUser, setMessageWindowUser, setActiveUser}){

    const [messageHandler, changeMessageHandler] = useState(); 
    const {name, email, avatarSettings, city } = messageWindowUser;      //Это тот пользователь сообщения которому мы хотим отправлять
    const [renderedMessages, setRenderedMessages] = useState();
    const [newMessages, setNewMessages] = useState([]);
    console.log()
    useEffect(()=>{
            // Так как мы не можем деструктуризировать свойство нашего активного пользователя с сообщениями у messageWindowUser через {... , ...,activeUser.id} = messageWindowUser, То
        // let userKeysWithValue = Object.entries(messageWindowUser) ; //Данный метод вроде как позволяет выводить каждое свойство и его значение в виде массива
        // let friendMessages; //Первый массив с сообщениями
        let userKeysWithValue = Object.entries(messageWindowUser) ; //Данный метод вроде как позволяет выводить каждое свойство и его значение в виде массива
        let friendMessages; //Первый массив с сообщениями (сообщения друга для активного пользователя в виде объекта!)
        userKeysWithValue.forEach((arr) => {
            console.log(arr)
            if (arr[0] === activeUser.id){  //arr[0] это ключ свойства, тоесть id пользователя для которого отправляем сообщение
                console.log(`friendFind ${arr}`)
                friendMessages = arr[1]
            }
        });
        console.log(friendMessages)
        ///
            //Внизу нужно пометить, что я специально отображаю наши новые сообщения в другом эффекте, делаю

        ////
        console.log(`activeUser scan`)
    
        let activeUserKeysWithValue = Object.entries(activeUser) ; //Данный метод вроде как позволяет выводить каждое свойство и его значение в виде массива
        let activeUserMessages; //Второй массив с сообщениями (сообщения активного пользователя для друга в виде объекта!)

        let keyOfObjForRegistrNewMessage;
        activeUserKeysWithValue.forEach((arr) => {
            console.log(arr)
            if (arr[0] === messageWindowUser.id){   //arr[0] это ключ свойства, тоесть id пользователя для которого отправляем сообщение
                keyOfObjForRegistrNewMessage = arr[0];
                activeUserMessages = arr[1]
            }
        });
        console.log(activeUserMessages)

        const rowArray = [...friendMessages, ...activeUserMessages];    //row это типа сырой на англ
        console.log(`row is ${JSON.stringify(rowArray)}`)
        
        //Тут промежуточный массив нужен (отсортированный по дате отправления)
        //Сортирует вроде как правильно
        const transitionalArrayForSorting = rowArray.sort((a,b) => new Date(a.date) - new Date(b.date)) //Промежуточный

        const finishedArray = transitionalArrayForSorting.map((obj) => {
            console.log(JSON.stringify(obj))
            const {by, content} = obj;
            const activeUserArr = by === activeUser.id; // Проверяем, это сообщение от друга или от нас самих
            console.log(`${by} === ${activeUser.by} ?`)
            console.log(activeUserArr)
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
        console.log(`finished is ${finishedArray}`)
        setRenderedMessages(finishedArray);

        if (messageHandler !== undefined && messageHandler.length !== 0){
            const newMessageForDB = {
                by: activeUser.id,
                date: Date(),
                content: messageHandler
            }
            const activeUserObjForEdit = {...activeUser};

            console.log(keyOfObjForRegistrNewMessage);
            activeUserObjForEdit[keyOfObjForRegistrNewMessage].push(newMessageForDB)        //В js`e есть такая штука obj[name] = value, це как бы то же самое. 
                                                                                            //Прекол в том что в name может быть константа с каким то содержимым
            setActiveUser(activeUserObjForEdit);
            localStorage.setItem('prevUser', JSON.stringify(activeUserObjForEdit));
            localStorage.setItem(`User${activeUser.id}`, JSON.stringify(activeUserObjForEdit))
            document.querySelector('.send-message-input').value = '';
            changeMessageHandler('')
        }

    },[messageWindowUser, activeUser, messageHandler])

    useEffect(()=>{
        
        //Це кусочек из первого эффекта
        // let activeUserKeysWithValue = Object.entries(activeUser) ; //Данный метод вроде как позволяет выводить каждое свойство и его значение в виде массива
        // let activeUserMessages; //Второй массив с сообщениями (сообщения активного пользователя для друга) в виде объекта!
        // activeUserKeysWithValue.forEach((arr) => {
        //     console.log(arr)
        //     if (arr[0] === messageWindowUser.id){
        //         activeUserMessages = arr[1]
        //     }
        // });
        // console.log(activeUserMessages);
        // if (messageHandler !== undefined && messageHandler.length !== 0){
        //     const newMessageForDB = {
        //         by: activeUser.id,
        //         date: Date(),
        //         content: messageHandler
        //     }
        //     // const renderedNewMessage = (
        //     //     <div className='sended-message message'>
        //     //         <div className='message-avatar' style = {{backgroundColor: `rgba(${activeUser.avatarSettings[1]})` }}>
        //     //             <p style = {{color: `rgba(${activeUser.avatarSettings[2]})`}}>{activeUser.avatarSettings[0]}</p>
        //     //         </div>
        //     //         <p className='message-content sended-message-content'>{messageHandler}</p>
        //     //     </div>
        //     // )
        //     // setNewMessages([...newMessages, renderedNewMessage]);
        //     // document.querySelector('.send-message-input').value = '';
        //     // changeMessageHandler('')
        // }

        
    },[messageHandler])

    // useEffect(() => {
    //     console.log('change');
    //     setNewMessages([])
    // },[messageWindowUser])

    // мне ж не придётся ещё один еффект делать если мы поменяли месаге виндов то менять localStorage и обновлять страницу (а видимо без него никак)
    //Тоесть логика такова

    // Нам нужно получить свойства с сообщениями у активного юзера и messageWindowUser

    // Далее соединяем эти массивы

    // Ну и перебираем через .map, там условие по условному так сказать type Для определения родителя сообщения


    // + в свойствах localStorage храним сообщения ДЛЯ пользователя (вроде как разницы то нет, надо подумать)
    // !Важно ! В массиве должны храниться объекты, у них должно быть свойство по которому я буду определять, 
    //отображать данное сообщение как активного пользователя или того, с кем мы общаемся, нужно будет ещё делать свойство объекту с датой отправления, чтоб потом порядок не рушить

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
                    </div> */}
                    
                    {renderedMessages}
                    
                    
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