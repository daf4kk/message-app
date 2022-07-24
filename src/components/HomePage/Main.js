import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';
import ActionWithPeoples from './ActionWithPeoples';


function Main({users, activeUser,setActiveUser, setAuthorized}){
    console.log(users);
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser} setActiveUser = {setActiveUser}/>
            <ActionWithPeoples users = {users} activeUser = {activeUser}/>
        </div>
    )
}



export default Main;