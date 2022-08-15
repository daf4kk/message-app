import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';
import UserInfo from '../subsidiaryComponents/UserInfo/UserInfo';
import AboutUserInfo from '../AboutUserInfo';

function HomePage({users, activeUser, setNeededUserId, neededUserId,  setUsers, setActiveUser, addOurRequests}){
    // console.log(`home is ${JSON.stringify(aboutUser)}`);
    console.log(activeUser)
    console.log(JSON.stringify(neededUserId));

    

    return (
        <div className='home-page'>
            <UserGroups/>
            <Main users = {users} setActiveUser = {setActiveUser} activeUser = {activeUser} setUsers = {setUsers} setNeededUserId = {setNeededUserId} addOurRequests = {(id) => addOurRequests(id)}/>
            <UserInfo activeUser = {activeUser} setActiveUser = {setActiveUser}/>
            <AboutUserInfo setNeededUserId = {setNeededUserId} neededUserId = {neededUserId} users = {users} activeUser = {activeUser} addOurRequests = {(id) => addOurRequests(id)}/>
        </div>
    )
}



export default HomePage;