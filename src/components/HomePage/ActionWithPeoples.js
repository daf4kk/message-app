import React, {useState} from 'react';

import './ActionWithPeople.css';


import SectionContentByType from './sections/SectionContentByType';
import AddFriendSection from './sections/AddFriendSection';

import groupIcon from '../imgs/group-icon.png';

function ActionWithPeoples({users, activeUser, setUsers, setActiveUser, setNeededUserId, addOurRequests}){
    const [sectionModule, setSectionModule] = useState('allUsers');
    function setActiveSectionCss(selector){
        const sections = document.querySelectorAll('.action-with-peoples section');
        sections.forEach((section)=>{
            section.classList.remove('active-section');
        })
        if (selector !== 'none'){
            const shouldBeActive = document.querySelector(`.${selector}`);
            shouldBeActive.classList.add('active-section');
        }
        
    }

    const acceptRequest = (id) => {
        // 1) Нужно убрать у обоих пользователей заявки в друзья друг к другу
        const activeUserId = activeUser.id;
        // const activeUserObjFromDB = JSON.parse(localStorage.getItem(`User${activeUserId}`));
        const ourFutureFriendFromDB = JSON.parse(localStorage.getItem(`User${id}`));
        // Убрать из листа пользователя
            //Проверить не хотели ли они добавить друг друга (у обоих пользователей из массива удалить id друг друга)
        const ourUserSendedRequests = activeUser.ourRequests;
        const ourUserGottenRequests = activeUser.otherRequests; //100%

        if (ourUserSendedRequests.includes(id)){
            //Чтоб избежать ошибок из за того что вдруг добавятся несколько id от одного пользователя буду использовать forEach
            ourUserSendedRequests.forEach((ourRequest, ourRequestUserId) =>{
                if (ourRequest === id){
                    ourUserSendedRequests.splice(ourRequestUserId, 1); //Удаляем нашу заявку в друзья тому пользователю что хотим добавить
                }
            })
        }

        ourUserGottenRequests.forEach((otherRequestsItem, indexOfRequest) => {
            if (otherRequestsItem === id){
                ourUserGottenRequests.splice(indexOfRequest, 1)
            }
        })

        // Другой пользователь (На заявку которого мы отвечаем)
        const otherUserSendedRequests = ourFutureFriendFromDB.ourRequests; //100%
        const otherUserGottenRequests = ourFutureFriendFromDB.otherRequests; 
        
        if (otherUserGottenRequests.includes(activeUserId)){    //Добавлял ли меня он чтоб очистить
            otherUserGottenRequests.forEach((otherRequest, otherRequestUserId) => {
                if (otherRequest === activeUserId){
                    otherUserGottenRequests.splice(otherRequestUserId, 1);
                }                    
            })
        }

        otherUserSendedRequests.forEach((sendedRequest, requestId) => {
            if (sendedRequest === activeUserId){
                otherUserSendedRequests.splice(requestId);
            }
        })
        activeUser[`${ourFutureFriendFromDB.id}`] = []; //Добавляем нашему пользователю новое свойство, где будет находиться массив с сообщениями
        const newActiveUserObj = {...activeUser, otherRequests: ourUserSendedRequests, ourRequests: ourUserSendedRequests}
        setActiveUser({...newActiveUserObj});
        localStorage.setItem('prevUser', JSON.stringify(newActiveUserObj));
        localStorage.setItem(`User${activeUserId}`, JSON.stringify(newActiveUserObj));


        const newOtherUserObj = {...ourFutureFriendFromDB, otherRequests: otherUserGottenRequests, ourRequests: otherUserSendedRequests}
        newOtherUserObj[`${activeUser.id}`] = [];   //Добавляем второму пользователю новое свойство, где будет находиться массив с сообщениями
        localStorage.setItem(`User${id}`, JSON.stringify(newOtherUserObj));

        
        // 2) Добавить обоих пользователей друг к другу в друзья
        if (!newActiveUserObj.friends.includes(id)){        //Проверка, нет ли этого пользователя уже в наших друзьях. Если есть, то заявка просто исчезает и друг не дублируется
            newActiveUserObj.friends.push(id)
            //prevUser, User${id}
            localStorage.setItem('prevUser', JSON.stringify(newActiveUserObj));
            localStorage.setItem(`User${activeUserId}`, JSON.stringify(newActiveUserObj))
            //ActiveUser
            setActiveUser({...newActiveUserObj});
            //otherUser
            newOtherUserObj.friends.push(activeUserId);
            localStorage.setItem(`User${id}`, JSON.stringify(newOtherUserObj));
        }
    }

    return (
        <div className='action-with-peoples'>
            <div className='sections'>
                <div className='title-content'>
                    <img className = 'title-icon' src = {groupIcon} alt = 'group-icon'></img>
                    <p>Пользователи</p>
                </div>
                <section className='all-users active-section'
                onClick = {() => {
                    setActiveSectionCss('all-users');//Функция
                    setSectionModule('allUsers');//state
                }}>
                        <p>Все пользователи</p>
                </section>

                <section className='other-requests'
                onClick = {() => {
                    setActiveSectionCss('other-requests');//Функция
                    setSectionModule('otherRequests');//state
                }}>
                        <p>Запросы на дружбу</p>
                </section>

                <section className='our-requests'
                onClick = {() => {
                    setActiveSectionCss('our-requests');//Функция
                    setSectionModule('ourRequests');//state
                }}>
                        <p>Ваши предложения</p>
                </section>

                <div className='add-friend'
                onClick  = { () => { 
                    setActiveSectionCss('none');
                    setSectionModule('addFriend');
                }
                    

                }>
                    <p>Добавить в друзья</p>
                </div>
            </div>
            <SectionContentByType users = {users} 
            setUsers = {setUsers} 
            activeUser = {activeUser} 
            setActiveUser = {setActiveUser} 
            sectionModule = {sectionModule} 
            //При передаче функций не забывать про передачу и аргументов (ниже), иначе при вызове их просто напросто не будет
            acceptRequest = {(id) => acceptRequest(id)}
            setNeededUserId = {setNeededUserId}/> 

            {/* Проверяем не выбрал ли пользователь секцию с добалвением в друзья */}
            {(sectionModule === 'addFriend' ? <AddFriendSection 
            users = {users} 
            setUsers = {setUsers} 
            activeUser = {activeUser} 
            setActiveUser = {setActiveUser} 
            addOurRequests = {(id) => addOurRequests(id)}
            setNeededUserId = {setNeededUserId}
            /> : <div></div>)}
            
        </div>
    )
}



export default ActionWithPeoples;