import React, {useEffect, useState} from 'react';
import './SectionContentByType.css';


function SectionContentByType({users ,sectionModule, activeUser}){
    const {otherRequests, ourRequests} = activeUser;
    const [usersList, setUsers] = useState();
    const [warning, setWarning] = useState();
    useEffect( ()=>{
        let list = [];
        switch(sectionModule){
            case 'allUsers':
                setWarning('');
                list = users
            break;

            case 'otherRequests':
                
                if (otherRequests.length !== 0){
                    users.forEach((item)=>{
                        if (otherRequests.includes(item.id)){
                            
                            list.push(item);
                        }
                    })
                    setWarning('');
                }else{
                    setWarning(<p className='section-warning'>С вами пока никто не хочет дружить</p>)
                }
                
            break;

            case 'ourRequests':
                
                if (ourRequests.length !== 0){
                    users.forEach((item)=>{
                        if (ourRequests.includes(item.id)){
                            
                            list.push(item);
                        }
                    })
                    setWarning('');
                }else{
                    setWarning(<p className='section-warning'>Вы не хотите ни с кем дружить</p>);
                }
            break;

            default: 
                setWarning(<p className='section-warning'>Что то пошло не так</p>);
            break;
        }

        list = list.map((user) => {
                    const {name, avatarSettings, id} = user;
                    //Всё равно проблемы с ключами почему то (пробовал и к Id пользователей добавлять различные буквы, и i увеличивать (инкрименты делать))
                    return (
                        <>
                            <li className='section-user' key = {`${id}user`}>
                              
                                <div className='section-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                                    <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                                </div>
                                    <p className = 'section-user-name'>{name}</p>
                                    
                            </li>
                        </>
                    )
                });
        setUsers(list);
        
    },[sectionModule]);

    return (
        <div className='section-content-by-type'>
            {warning}
            {usersList}
        </div>
    )
}



export default SectionContentByType;