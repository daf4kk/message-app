import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';



function Main({users, activeUser,setActiveUser, setAuthorized}){
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser} setActiveUser = {setActiveUser}/>
        </div>
    )
}



export default Main;