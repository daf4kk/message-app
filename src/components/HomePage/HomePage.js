import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';

function HomePage({users, activeUser, setActiveUser}){
    return (
        <div className='home-page'>
            <UserGroups/>
            <Main users = {users} activeUser = {activeUser} setActiveUser = {setActiveUser}/>
        </div>
    )
}



export default HomePage;