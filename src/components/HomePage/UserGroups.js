import React from 'react';
import {Link} from 'react-router-dom'
import './UserGroups.css'
import logo from '../imgs/logo.png'
function UserGroups(){
    return (
        <div className='user-groups'>
            
            <div className='main-page'>
                <Link to = '/home'>
                    <img src = {logo} alt = 'main-logo'></img>
                    
                </Link>
            </div>
        </div>
    )
}



export default UserGroups;