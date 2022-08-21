import React, {useState} from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';
import UserInfo from '../subsidiaryComponents/UserInfo/UserInfo';
import AboutUserInfo from '../AboutUserInfo';



function HomePage({users, activeUser, setNeededUserId, neededUserId,  setUsers, setActiveUser, addOurRequests}){
    const [messageWindowUser, setMessageWindowUser] = useState();
    console.log(messageWindowUser);
    console.log(typeof(messageWindowUser));
    return (
        <div className='home-page'>
            <UserGroups/>
            <Main 
            users = {users} 
            setActiveUser = {setActiveUser} 
            activeUser = {activeUser} 
            setUsers = {setUsers} 
            setNeededUserId = {setNeededUserId} 
            addOurRequests = {(id) => addOurRequests(id)}
            setMessageWindowUser = {setMessageWindowUser}
            messageWindowUser = {messageWindowUser}/>

            <UserInfo activeUser = {activeUser} setActiveUser = {setActiveUser}/>

            <AboutUserInfo 
            setNeededUserId = {setNeededUserId} 
            neededUserId = {neededUserId} 
            users = {users} 
            activeUser = {activeUser} 
            addOurRequests = {(id) => addOurRequests(id)}
            setMessageWindowUser = {setMessageWindowUser}/>
        </div>
    )
}



export default HomePage;