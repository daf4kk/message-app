import React, {useState} from 'react';

import './App.css';

import {Routes, Route} from 'react-router-dom'


import Registr from './components/AuthPage/Registr';
import Login from './components/AuthPage/Login';

function App() {
  const [activeUser, setActiveUser] = useState();  
  const [users, setUsers] = useState(
    [
      {
        name: 'Andrey',
        email: 'qwerty@mail.ru',
        password: 'qwerty'
      },
      {
        name: 'Roma',
        email: 'ramenCisco@mail.ru',
        password: '123'
      },
      {
        name: 'Ilya',
        email: 'ilyazxc@mail.ru',
        password: 'zxc'
      }
    ]

  )
  const checkActiveUser = () => {
    console.log(activeUser);
  }
  return (
    <>

            <Routes>
              {/* Пускай начальная страница это Login.js */}
                <Route path = '/' element = {<Login users = {users} setActiveUser = {setActiveUser}/>}></Route> 
                <Route path = '/registration' element = {<Registr users = {users}/>}></Route>
            </Routes>
    </>
  );
}

export default App;
