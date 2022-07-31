import React, {useState} from 'react';

import './ActionWithPeople.css';


import SectionContentByType from './sections/allUsersSection/SectionContentByType';
import AddFriendSection from './sections/allUsersSection/AddFriendSection';

import groupIcon from './imgs/group-icon.png';

function ActionWithPeoples({users, activeUser}){
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
            <SectionContentByType users = {users} sectionModule = {sectionModule} activeUser = {activeUser}/>
            {(sectionModule === 'addFriend' ? <AddFriendSection users = {users}/> : <div></div>)}
            
        </div>
    )
}



export default ActionWithPeoples;