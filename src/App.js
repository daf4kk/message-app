import React, {useState, useEffect} from 'react';

import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom'

//Pages
import Registr from './components/AuthPage/Registr';
import Login from './components/AuthPage/Login';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [activeUser, setActiveUser] = useState();
  const [users, setUsers] = useState(
    [
      {
        id: '58q1q2p6',
        name: 'Andrey',
        email: 'qwerty@mail.ru',
        password: 'qwerty',
        avatarSettings: ['A','214,38,200, .4','214,38,200'],
        city: 'Чикаго',
        stampUrl: 'America/Chicago'
      },
      {
        id: 'e748q4oy',
        name: 'Roma',
        email: 'ramenCisco@mail.ru',
        password: '123',
        avatarSettings: ['R','210,204,129, .4','210,204,129'],
        city: 'Киев',
        stampUrl: 'Europe/Kiev'
      },
      {
        id: 'y89r3yo',
        name: 'Ilya',
        email: 'ilyazxc@mail.ru',
        password: 'zxc',
        avatarSettings: ['I','26,141,112, .4','26,141,112'],
        city: 'Красноярск',
        stampUrl: 'Asia/Krasnoyarsk'
      }
    ]

  )

  useEffect(() => {
      for (let i = 0; i < localStorage.length; i++) {   //
        const userKey = localStorage.key(i);  //Находим название ключа в localStorage под индексом i
        const JSONUserFromLocalStorage = localStorage.getItem(userKey); //Получаем по ключу выше наше значение ключа (у нас объект внутри ключа является STR)
        const parsedUser = JSON.parse(JSONUserFromLocalStorage);
        // users.push(parsedUser);
        let duplicateCheck = false;
        for (let i = 0; i < users.length; i++){   // mount срабатывает два раза и добавляет по два одинаковых пользователя из localStorage
          if (users[i].id === parseInt(parsedUser.id)){    //Поэтому пришлось делать проверку на наличие одинаковых пользоваетелй
            duplicateCheck = true;
          }
        }
        if (duplicateCheck === false){
          users.push(parsedUser);
        }
    }
  }, [users]); //[] проверка на прошлые props 

  return (
    <>
            <Routes>
              {/* Пускай начальная страница это Login.js */}
                {/* если activeUser имеется, то перенаправляем на home, иначе логин*/}
                <Route path = '/' element = {activeUser ? <Navigate to = '/home'/> : <Login users = {users} setActiveUser = {setActiveUser}/>}></Route>
                <Route path = '/registration' element = {<Registr users = {users} setUsers = {setUsers}/>}></Route>
                <Route path = '/home' element = {activeUser ? <HomePage users = {users} activeUser = {activeUser} setActiveUser = {setActiveUser}/> : <Navigate to = '/'/>}></Route>
            </Routes>
    </>
  );
}

export default App;