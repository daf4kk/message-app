import React, {useState} from 'react';

import './ActionWithPeople.css';


import SectionContentByType from './sections/SectionContentByType';
import AddFriendSection from './sections/AddFriendSection';

import groupIcon from './imgs/group-icon.png';

function ActionWithPeoples({users, activeUser, setUsers, setActiveUser}){
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

    const addOurRequests = (id) => {    //id в аргументе это идентификатор пользоваетля которому мы хотим оставить заявку
        // 1) Нужно нашему пользователю добавить ourRequests
        //activeUser
        const {ourRequests} = activeUser;
        let newOurRequests;
        if (ourRequests.includes(id)){
            //Если мы УЖЕ отправили запрос пользователю
            newOurRequests = ourRequests;
        }else{
            //Если этого пользователя мы ещё НЕ пытались добавлять
            ourRequests.push(id);
            newOurRequests = ourRequests;
        }
        setActiveUser({...activeUser, ourRequests: newOurRequests})
        //prevUser
        localStorage.setItem('prevUser', JSON.stringify(activeUser));  //Меняем данные prevUser в localStorage
        //localStorageUser
        localStorage.setItem(`User${activeUser.id}`, JSON.stringify(activeUser)); //Изменяем объект нашего пользователя в localStorage для запоминания людей которых мы хотели добавить
        
       // 2) Тому пользователю которого добавляем добавить otherRequests от нас
       const userForAddInFriendFromLocalStorage = localStorage.getItem(`User${id}`)
       const otherUser = JSON.parse(userForAddInFriendFromLocalStorage);
       const {otherRequests} = otherUser;
       
       const changedUser = {...otherUser, otherRequests: [...otherRequests, activeUser.id]};
       localStorage.setItem(`User${id}`, JSON.stringify(changedUser));
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
            addOurRequests = {(id) => addOurRequests(id)}/> 
            {(sectionModule === 'addFriend' ? <AddFriendSection users = {users} setUsers = {setUsers} activeUser = {activeUser} setActiveUser = {setActiveUser}/> : <div></div>)}
            
        </div>
    )
}



export default ActionWithPeoples;