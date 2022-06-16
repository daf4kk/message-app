import React, {useState} from 'react';

import './Registr.css';

import closedEye from '../icons/closedEye.png';
import openedEye from '../icons/openedEye.png';
import warning from '../icons/warning.png';

import {Link} from 'react-router-dom';

function Registr({users, setUsers}){
    
    const [anError, setStatus] = useState()

    const [isPrivate, setPrivate] = useState(true); 
    let typeOfEye = isPrivate ? closedEye : openedEye;
    let typeOfInput = isPrivate ? 'password' : 'text';

    const [form, setForm] = useState({      // Принимаем пользователя с такими данными:
        name: '',
        email: '',
        password: ''
    }); 
    const changeHandler = (e) => {
        setForm({...form, [e.target.name] : e.target.value});

    }

    const checkForValidate = () => {
        const {name, email, password} = form;
        // <div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'></p></div>
        
        //Проверка на не валидные поля
        if (name.length < 3){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>В поле имя должно быть не меньше 4 символов</p></div>);
            return
        }else{
            setStatus();
        }
        //Проверка почты на пустую строку, наличие @ и последующего адресса
        if (email.length === 0){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Введите вашу почту</p></div>)
            return
        }else if (email.indexOf("@") === -1){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Проверьте правильность введённой почты (почта должна содержать @)</p></div>);
            return
        }else if (email.indexOf(".com") === -1 && email.indexOf(".ru") === -1 && email.indexOf(".eu") === -1){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Введите последующий адресс после "@"</p></div>);
            return
        }
        else{
            setStatus();
        }
        

        if (password.length === 0){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Введите ваш будущий пароль</p></div>)
            return
        }else{
            setStatus();
        }

        //Проверка почты на уникальность
        
        const doesEmailValid = users.find(user => user.email === email);
        
        
        if (doesEmailValid === false){
            setStatus(<div className='error-block'><img src = {warning} alt = 'warning'></img><p className='error'>Данная почта уже используется</p></div>);
            return
        }else{  //Если всё в порядке:
            setStatus(<p className='succes'>Пользователь успешно зарегистрирован</p>);
            //Генерация id для нового пользователя путём считывания имеющихся аккаунтов в бд
            //Подготовка отправки нащего пользователя в бд
            console.log(users);
            const allUsersLength = users.length;
            console.log(allUsersLength);      
            const idForUser = allUsersLength;       // !!
            const newUser = {
                id: idForUser,
                name: name,
                email: email,
                password: password
            }
            // В localStorage можно хранить только строки
            const newUserInJSON = JSON.stringify(newUser);
            localStorage.setItem(`User${idForUser}`, newUserInJSON);
            console.log(`prev users is ${JSON.stringify(users)}`);
            setUsers([...users, newUser]);  //
            console.log(`new users is ${JSON.stringify(users)}`);
            // setUsers([{...users, newUser}])
            return

            
        }
    }


    return (
        <div className='registr-wrapper'>
            <div className = 'registr'>
            <h3>Регистрация</h3>
            {anError}
            <form
            onSubmit={(e) => e.preventDefault()}>
                <div className='form'>
                    <div className='inputs'>
                        <div className='name-field'>
                            <label htmlFor='name'>Ваше имя</label>
                            <input 
                            type = 'text'
                            name = 'name'
                            onChange = {changeHandler}
                            >   
                            </input>
                            
                        </div>
                        <div className='email-field'>
                            <label htmlFor='email'>Почта</label>
                            <input 
                            type = 'email'
                            name = 'email'
                            onChange = {changeHandler}
                            >   
                            </input>
                            
                        </div>
                        
                        <div className='password-field'>
                            <label htmlFor='email'>Пароль</label>
                            <div className='row'>
                                <input 
                                type = {typeOfInput}
                                name = 'password'
                                maxLength={14}
                                onChange = {changeHandler}
                                >   
                                </input>
                                {/* <img src = {require('./closedEye.png')}></img> */}
                                <img 
                                src = {typeOfEye} alt = 'eye'
                                onClick={()=> {setPrivate(!isPrivate)}}
                                ></img> 
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='registr-buttons'>
                        <button 
                        type = 'submit'
                        onClick={checkForValidate}
                        >Регистрация</button>
                        <Link to = '/'>Есть аккаунт?</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}



export default Registr;