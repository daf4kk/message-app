import React, {useEffect, useState} from 'react';

import './AddFriendSection.css';

import addFriendIcon from '../imgs/invite.png';

function AddFriendSection({users, addOurRequests}){
    
    const [peopleHandler, changePeopleHandler] = useState('');
    const [usersList, setUsersList] = useState([])
    const [anError, setError] = useState();

    const DOMInput = document.querySelector('.add-friend-input');

    let usersNames = [];
    users.forEach((user)=>{
        usersNames.push(user.name);
    });
    useEffect( () => {  // При каждом изменений handler`a
        setUsersList(<div></div>)
        let ids = [];
        usersNames.forEach((name, id)=>{
            if (name.includes(peopleHandler)){
                // console.log(name)
                // console.log(id)
                ids.push(id);
                // console.log(ids)
            }
        })
        // console.log(`id is ${ids[0]}`)
        if (ids.length !== 0){
            setError()
            const input = document.querySelector('.add-friend-input');
            if (input.classList.contains('invalid-input')){
                input.classList.remove('invalid-input');
            }
            setUsersList(users.map((item, id) => {
                if (ids.includes(id)){
                    const {avatarSettings,name} = item;
                    return (
                        <>
                            <li className='section-user' key = {`${id}userr`}>
                              
                                <div className='section-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                                    <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                                </div>
                                    <p className = 'section-user-name'>{name}</p>
                                    
                                    <img className='add-friend-icon' src = {addFriendIcon} alt = 'добавить в друзья'
                                    onClick={() => {
                                        addOurRequests(item.id);        //В этй секций перебор немного другой (если мы прописываем id, то сюда идёт номер элемента из forEach)
                                    }}
                                    ></img>
                    
                                    
                            </li>
                        </>
                    )
                }
            }));
        }else{
            setError(<p className='p-error'>Мы не можем найти данного пользователя, проверьте введённые вами данные и их РеГиСтР</p>)
            
            DOMInput.classList.add('invalid-input');
        }
    }, [peopleHandler])
    
    return (
        <div className='add-friend-section'>             
                <form className='find-options-form'
                onSubmit={ 
                    (e) => {
                        e.preventDefault();
                        console.log('submit')
                    }
                }>
                        <input 
                        placeholder = 'Введите имя или id пользователя учитывая регистр'
                        type = 'text' 
                        className= 'add-friend-input browser-default'
                        onChange={ (e) =>{
                            changePeopleHandler(e.target.value);
                        }}
                        >
                        </input>
                    <button type = 'submit'>Добавить</button>
                </form>

            

            <div className='founded-peoples'>
                {anError}
                {usersList}
            </div>
        </div>
    )
}



export default AddFriendSection;

