import React, {useEffect, useState} from 'react';
import './AllUsersModule.css';


function AllUsersModule({users}){
    const [usersList, setUsers] = useState();
    useEffect( ()=>{
        const list = users.map((user) => {
            const {name, avatarSettings, id} = user;
            //Всё равно проблемы с ключами почему то (пробовал и к Id пользователей добавлять различные буквы, и i увеличивать (инкрименты делать))
            return (
                <>
                    <li className='all-users-user' key = {`${id}user`}>
                      
                        <div className='all-users-user-avatar' style = {{backgroundColor: `rgba(${avatarSettings[1]})` }}>
                            <p style = {{color: `rgba(${avatarSettings[2]})`}}>{avatarSettings[0]}</p>
                        </div>
                            <p className = 'all-users-user-name'>{name}</p>
                            <p className = 'all-users-user-id'>{id}</p>
                    </li>
                </>
            )
        });
        setUsers(list);
    },[]);

    return (
        <div className='all-users-module'>
           {usersList}
        </div>
    )
}



export default AllUsersModule;