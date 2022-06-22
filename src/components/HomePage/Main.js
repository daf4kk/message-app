import React from 'react';


import './Main.css';

//Components
import FriendsWindow from './FriendsWindow';



function Main({users, activeUser}){
    return (
        <div className='main'>
            <FriendsWindow users = {users} activeUser = {activeUser}/>
        </div>
    )
}



export default Main;