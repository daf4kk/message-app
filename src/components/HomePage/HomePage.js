import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';
import UserInfo from '../subsidiaryComponents/UserInfo/UserInfo';


function HomePage({users, activeUser, setActiveUser, setUsers}){

    return (
        <div className='home-page'>
            <UserGroups/>
            <Main users = {users} setActiveUser = {setActiveUser} activeUser = {activeUser} setUsers = {setUsers}/>
            <UserInfo activeUser = {activeUser} setActiveUser = {setActiveUser}/>
        </div>
    )
}



export default HomePage;