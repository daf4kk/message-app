import React, {useState} from 'react';

import './ActionWithPeople.css';

import AllUsersModule from './sections/allUsersSection/AllUsersModule';


import groupIcon from './imgs/group-icon.png';

function ActionWithPeoples({users}){
    const [sectionModule, setSectionModule] = useState('allUsers');

    function setActiveSection(selector){
        const sections = document.querySelectorAll('.action-with-peoples section');
        sections.forEach((section)=>{
            section.classList.remove('active-section');
        })
        const shouldBeActive = document.querySelector(`.${selector}`);
        shouldBeActive.classList.add('active-section');
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
                    setActiveSection('all-users');//Функция
                    setSectionModule('allUsers');//state
                }}>
                        <p>Все пользователи</p>
                </section>

                <section className='other-requests'
                onClick = {() => {
                    setActiveSection('other-requests');//Функция
                    setSectionModule('otherRequests');//state
                }}>
                        <p>Запросы на дружбу</p>
                </section>

                <section className='our-requests'
                onClick = {() => {
                    setActiveSection('our-requests');//Функция
                    setSectionModule('ourRequests');//state
                }}>
                        <p>Ваши предложения</p>
                </section>

                <div className='add-friend'>
                    <p>Добавить в друзья</p>
                </div>
            </div>
            <AllUsersModule users = {users}/>
        </div>
    )
}



export default ActionWithPeoples;