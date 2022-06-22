import React from 'react';

import './HomePage.css';

//Components
import UserGroups from './UserGroups';
import Main from './Main';

function HomePage(){
    return (
        <div className='home-page'>
            <UserGroups/>
            <Main/>
        </div>
    )
}



export default HomePage;