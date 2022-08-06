import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';
import ActionWithPeoples from './ActionWithPeoples';


function Main({users, activeUser,setActiveUser, setUsers}){
    console.log(users);
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser}/>
            <ActionWithPeoples users = {users} setUsers = {setUsers} activeUser = {activeUser} setActiveUser = {setActiveUser}/>
        </div>
    )
}



export default Main;