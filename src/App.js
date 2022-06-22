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
        id: 0,
        name: 'Andrey',
        email: 'qwerty@mail.ru',
        password: 'qwerty'
      },
      {
        id: 1,
        name: 'Roma',
        email: 'ramenCisco@mail.ru',
        password: '123'
      },
      {
        id: 2,
        name: 'Ilya',
        email: 'ilyazxc@mail.ru',
        password: 'zxc'
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
                <Route path = '/home' element = {activeUser ? <HomePage users = {users} activeUser = {activeUser}/> : <Navigate to = '/'/>}></Route>
            </Routes>
    </>
  );
}

export default App;