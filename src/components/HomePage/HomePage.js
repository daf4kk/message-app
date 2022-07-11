import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';
import UserInfo from '../subsidiaryComponents/UserInfo/UserInfo';


function HomePage({users, activeUser, setActiveUser}){

    return (
        <div className='home-page'>
            <UserGroups/>
            <Main users = {users} setActiveUser = {setActiveUser} activeUser = {activeUser}/>
            <UserInfo activeUser = {activeUser} setActiveUser = {setActiveUser}/>
        </div>
    )
}



export default HomePage;