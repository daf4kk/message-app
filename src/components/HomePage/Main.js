import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';
import ActionWithPeoples from './ActionWithPeoples';


function Main({users, activeUser,setActiveUser, setUsers, setNeededUserId, addOurRequests}){
    console.log(users);
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser} setNeededUserId = {setNeededUserId}/>
            <ActionWithPeoples users = {users} setUsers = {setUsers} activeUser = {activeUser} setActiveUser = {setActiveUser} setNeededUserId = {setNeededUserId} addOurRequests = {(id) => addOurRequests(id)}/>
        </div>
    )
}



export default Main;