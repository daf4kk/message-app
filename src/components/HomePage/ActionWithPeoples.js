import React from 'react';
import './ActionWithPeople.css';

import groupIcon from './imgs/group-icon.png';

function ActionWithPeoples(){
    return (
        <div className='action-with-peoples'>
            <div className='sections'>
                <div className='title-content'>
                    <img className = 'title-icon' src = {groupIcon} alt = 'group-icon'></img>
                    <p>Пользователи</p>
                </div>
                <section className='all-users active-section'>
                        <p>Все пользователи</p>
                </section>

                <section className='other-requests'>
                        <p>Запросы на дружбу</p>
                </section>

                <section className='our-requests'>
                        <p>Ваши предложения</p>
                </section>

                <div className='add-friend'>
                    <p>Добавить в друзья</p>
                </div>


            </div>
        </div>
    )
}



export default ActionWithPeoples;