import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';
import UserInfo from '../subsidiaryComponents/UserInfo/UserInfo';
import AboutUserInfo from '../AboutUserInfo';

function HomePage({users, activeUser, setActiveUser, setUsers, aboutUser, setAboutUser}){
    // console.log(`home is ${JSON.stringify(aboutUser)}`);
    return (
        <div className='home-page'>
            <UserGroups/>
            <Main users = {users} setActiveUser = {setActiveUser} activeUser = {activeUser} setUsers = {setUsers}/>
            <UserInfo activeUser = {activeUser} setActiveUser = {setActiveUser}/>
            <AboutUserInfo neededUserId = {activeUser} aboutUser = {aboutUser}/>
        </div>
    )
}



export default HomePage;