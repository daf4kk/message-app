import React, {useState, useEffect} from 'react';

import './App.css';

import {Routes, Route} from 'react-router-dom'


import Registr from './components/AuthPage/Registr';
import Login from './components/AuthPage/Login';

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
    console.log('Mount / Update');
    console.log(users);
    console.log(`localStorage.length = ${localStorage.length}`);
      for (let i = 0; i < localStorage.length; i++) {   //
        
        const userKey = localStorage.key(i);  //Находим название ключа в localStorage под индексом i
        console.log(userKey);
        const JSONUserFromLocalStorage = localStorage.getItem(userKey); //Получаем по ключу выше наше значение ключа (у нас объект внутри ключа является STR)
        console.log(`JSON User is ${JSONUserFromLocalStorage}`);

        const parsedUser = JSON.parse(JSONUserFromLocalStorage);  ////Делаем из строки объект
        console.log(`parsed user is ${parsedUser}`);

      
        setUsers([...users,  parsedUser]);    //НЕ {}, А [] (СМОТРЕТЬ НА ДА ТО КУДА МЫ ДОБАВЛЯЕМ (сейчас мы добавляли ОБЪЕКТЫ В МАССИВ! поэтому я и получил проблему)  )
        
        console.log(`parsed ${parsedUser}`);
        console.log(`parsed ${JSON.stringify(parsedUser)}`);
        i++;
        
         // Не забывать про ретюрны чтоб при последующей регистраций не сохранялись данные отсюда и не копировались юзеры
        // console.log(users);
    }
    console.log(`Now users is ${users}`)
    console.log(`Now users is ${JSON.stringify(users)}`)
    
    
  }, []); //[] проверка на прошлые props 


  const checkAllUser = () => {
    console.log(users);
    console.log(JSON.stringify(users));

  }
  return (
    <>
            <button
            onClick = {checkAllUser}>click</button>
            <Routes>
              {/* Пускай начальная страница это Login.js */}
                <Route path = '/' element = {<Login users = {users} setActiveUser = {setActiveUser}/>}></Route> 
                <Route path = '/registration' element = {<Registr users = {users} setUsers = {setUsers}/>}></Route>
            </Routes>
    </>
  );
}

export default App;
