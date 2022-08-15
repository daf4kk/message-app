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
        name: 'admin',
        email: 'admin',
        password: 'admin',
        avatarSettings: ['A','214,38,200, .4','214,38,200'],
        city: 'Чикаго',
        stampUrl: 'America/Chicago',
        friends: [
          'e748q4oy'
        ],
        otherRequests: [
          
        ],
        ourRequests: [
          
        ]
      }
    ]
  )
  // const [aboutUser, setAboutUser] = useState({...activeUser});   //Для компонента который показывает о каком пользователе мы хотим что либо узнать, передаваться будет id!
  const [neededUserId, setNeededUserId] = useState(`activeUser.id`);
  useEffect(() => {
      if (localStorage.length !== 0){
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
          
          // Проверяем был ли пользователь авторизирован (Запоминаем пользователя при обновлений страницы)
          
      }
      const prevUser = localStorage.getItem('prevUser');
        if (prevUser !== null){   // Проверяем не обновлял ли пользователь страницу
          setActiveUser(JSON.parse(prevUser));  
          //Так же в users нужно найти этого prevUser и удалить, так как у меня prevUsers помещается в users
          // (Так как с find тут особо не поработаешь - приходится перебирать, а не поработаешь так как объекты в js с одинаковыми ключами и значениями в них всё равно не равны)
          // users.find((user, index) => {
          //   if (user.id === JSON.parse(prevUser).id){
          //     // users.splice(index, 1);
          //     console.log(user.id);
          //     console.log(JSON.parse(prevUser).id);
          //     console.log(index)
          //   }
          // })
          const sortedUsers = [];
          users.filter((user) => {
            if (user.id !== JSON.parse(prevUser).id){
              sortedUsers.push(user)
            }
          });
          setUsers([...sortedUsers]);
        }     
      
      }
      
  }, []); //[] проверка на прошлые props 


  const addOurRequests = (id) => {    //id в аргументе это идентификатор пользоваетля которому мы хотим оставить заявку
    // 1) Нужно нашему пользователю добавить ourRequests
    //activeUser
    const {ourRequests} = activeUser;
    let newOurRequests;
    if (ourRequests.includes(id)){
        //Если мы УЖЕ отправили запрос пользователю
        newOurRequests = ourRequests;
    }else{
        //Если этого пользователя мы ещё НЕ пытались добавлять
        ourRequests.push(id);
        newOurRequests = ourRequests;
    }
    setActiveUser({...activeUser, ourRequests: newOurRequests})
    //prevUser
    localStorage.setItem('prevUser', JSON.stringify(activeUser));  //Меняем данные prevUser в localStorage
    //localStorageUser
    localStorage.setItem(`User${activeUser.id}`, JSON.stringify(activeUser)); //Изменяем объект нашего пользователя в localStorage для запоминания людей которых мы хотели добавить
    
   // 2) Тому пользователю которого добавляем добавить otherRequests от нас
   const userForAddInFriendFromLocalStorage = localStorage.getItem(`User${id}`);
   console.log(userForAddInFriendFromLocalStorage);
   const otherUser = JSON.parse(userForAddInFriendFromLocalStorage);
   const {otherRequests} = otherUser;
   
   const changedUser = {...otherUser, otherRequests: [...otherRequests, activeUser.id]};
   localStorage.setItem(`User${id}`, JSON.stringify(changedUser));
}




  return (
    <>
            <Routes>
              {/* Пускай начальная страница это Login.js */}
                {/* если activeUser имеется, то перенаправляем на home, иначе логин*/}
                <Route path = '/' element = {activeUser ? <Navigate to = '/home'/> : <Login users = {users} setActiveUser = {setActiveUser} setUsers = {setUsers}/>}></Route>
                <Route path = '/registration' element = {<Registr users = {users} setUsers = {setUsers}/>}></Route>
                <Route path = '/home' element = {activeUser ? <HomePage 
                users = {users} 
                activeUser = {activeUser} 
                setActiveUser = {setActiveUser} 
                setUsers = {setUsers}
                neededUserId = {neededUserId}
                setNeededUserId = {setNeededUserId}
                addOurRequests = {(id) => addOurRequests(id)}
                /> : <Navigate to = '/'/>}></Route>
            </Routes>
    </>
  );
}

export default App;