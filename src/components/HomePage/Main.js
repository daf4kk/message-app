import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';
import ActionWithPeoples from './ActionWithPeoples';
import MessageSection from './sections/MessageSection';


function Main({users, activeUser,setActiveUser, setUsers, setNeededUserId, addOurRequests, setMessageWindowUser, messageWindowUser}){
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser} setNeededUserId = {setNeededUserId} setMessageWindowUser = {setMessageWindowUser}/>

            {/* Тут проверка какой компонент отображать */}
            {messageWindowUser !== undefined ? <MessageSection
            activeUser = {activeUser}
            messageWindowUser = {messageWindowUser}
            setMessageWindowUser = {setMessageWindowUser}
            setActiveUser = {setActiveUser}
            
            /> : <ActionWithPeoples 
            users = {users} 
            setUsers = {setUsers} 
            activeUser = {activeUser} 
            setActiveUser = {setActiveUser} 
            setNeededUserId = {setNeededUserId} 
            addOurRequests = {(id) => addOurRequests(id)}/>}
        </div>
    )
}



export default Main;